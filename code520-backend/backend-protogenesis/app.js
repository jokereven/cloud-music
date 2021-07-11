//引入接口
const HandleBlogRoute = require('./src/route/blog');
const HandleUserRoute = require('./src/route/user');

const ServerHandle = (req, res) => {
	// 设置返回格式 JSON
	res.setHeader('Content-type', 'application/json');

	//获取path
	const url = req.url;
	req.path = url.split('?')[0];

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
};
module.exports = ServerHandle;
// process.env.NODE_ENV
