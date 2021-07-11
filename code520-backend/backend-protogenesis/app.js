const querystring = require('querystring');
//引入接口
const HandleBlogRoute = require('./src/route/blog');
const HandleUserRoute = require('./src/route/user');

// 处理postdata
const GetPostData = (req) => {
	const promise = new Promise((resolve, reject) => {
		if (req.methos !== 'POST') {
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

	// 处理 postdata
	GetPostData(req).then((postDate) => {
		req.body = postDate;

		//处理blog路由
		const blogdata = HandleBlogRoute(req, res);
		if (blogdata) {
			res.end(JSON.stringify(blogdata));
			return;
		}
		//处理user路由
		const userdate = HandleUserRoute(req, res);
		if (userdate) {
			res.end(JSON.stringify(userdate));
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
