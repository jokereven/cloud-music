const querystring = require('querystring');
//引入接口
const HandleBlogRoute = require('./src/route/blog');
const HandleUserRoute = require('./src/route/user');

//获取cookie的过期时间
const getCookieExpires = () => {
	const time = new Date();
	time.setTime(time.getTime() + 24 * 60 * 60 * 1000);
	console.log(time.toUTCString());
	return time.toUTCString();
};

//session 数据
const SESSION_DATA = {};

// 处理postdata
const GetPostData = (req) => {
	const promise = new Promise((resolve, reject) => {
		if (req.method !== 'POST') {
			resolve({});
			return;
		}
		if (req.headers['content-type'] !== 'application/json') {
			resolve({});
			return;
		}
		let postDate = '';
		req.on('data', (chunk) => {
			postDate += chunk.toString();
		});
		req.on('end', () => {
			if (!postDate) {
				resolve({});
				return;
			}
			resolve(JSON.parse(postDate));
		});
	});
	return promise;
};

const ServerHandle = (req, res) => {
	// 设置返回格式 JSON
	res.setHeader('Content-type', 'application/json');

	// 获取path
	const url = req.url;
	req.path = url.split('?')[0];

	//解析query
	req.query = querystring.parse(url.split('?')[1]);

	//解析cookie
	req.cookie = {};
	const cookieStr = req.headers.cookie || '';
	cookieStr.split(';').forEach((item) => {
		if (!item) {
			return;
		}
		const arr = item.split('=');
		const key = arr[0];
		const val = arr[1];
		req.cookie[key] = val;
	});

	//解析session
	let needSetCookie = false;
	let userID = req.cookie.userid;
	if (userID) {
		if (!SESSION_DATA[userID]) {
			SESSION_DATA[userID] = {};
		}
	} else {
		needSetCookie = true;
		userID = `${Date.now()}-${Math.random()}`;
		SESSION_DATA[userID] = {};
	}
	req.session = SESSION_DATA[userID];

	// 处理 postdata
	GetPostData(req).then((postDate) => {
		req.body = postDate;

		//处理blog路由
		// const blogdata = HandleBlogRoute(req, res);
		// if (blogdata) {
		// 	res.end(JSON.stringify(blogdata));
		// 	return;
		// }
		const BlogResult = HandleBlogRoute(req, res);
		if (BlogResult) {
			BlogResult.then((blogdata) => {
				if (needSetCookie) {
					res.setHeader(
						'Set-Cookie',
						`userid=${userID}; path='/';httpOnly;expires=${getCookieExpires()}`
					);
				}

				res.end(JSON.stringify(blogdata));
			});
			return;
		}

		//处理user路由
		// const userdate = HandleUserRoute(req, res);
		// if (userdate) {
		// 	res.end(JSON.stringify(userdate));
		// 	return;
		// }
		const UserRessult = HandleUserRoute(req, res);
		if (UserRessult) {
			UserRessult.then((userdate) => {
				if (needSetCookie) {
					res.setHeader(
						'Set-Cookie',
						`userid=${userID}; path='/';httpOnly;expires=${getCookieExpires()}`
					);
				}

				res.end(JSON.stringify(userdate));
			});
			return;
		}
		//未命中路由 返回 404
		res.writeHead(404, { 'Content-type': 'text/plain' });
		res.write('404 Not Found\n');
		res.end();
	});
};
module.exports = ServerHandle;
// process.env.NODE_ENV
