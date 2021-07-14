const { Login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

//获取cookie的过期时间
// const getCookieExpires = () => {
// 	const time = new Date();
// 	time.setTime(time.getTime() + 24 * 60 * 60 * 1000);
// 	console.log(time.toUTCString());
// 	return time.toUTCString();
// };

const HandleUserRoute = (req, res) => {
	const method = req.method;

	//登录
	if (method === 'GET' && req.path === '/api/user/login') {
		// const { username, password } = req.body;
		const { username, password } = req.query;
		const result = Login(username, password);
		return result.then((data) => {
			if (data.username) {
				//操作cookie
				// res.setHeader(
				// 	'Set-Cookie',
				// 	`username=${
				// 		data.username
				// 	}; path='/';httpOnly;expires=${getCookieExpires()}`
				// );

				//操作session
				req.session.username = data.username;
				req.session.realname = data.realname;
				return new SuccessModel();
			}
			return new ErrorModel('登录失败');
		});
	}

	//登陆验证测试
	if (method === 'GET' && req.path === '/api/user/login-test') {
		if (req.session) {
			return Promise.resolve(
				new SuccessModel({
					session: req.session,
				})
			);
		}
		return Promise.resolve(new ErrorModel('无效的session'));
	}
	return;
};

module.exports = HandleUserRoute;
