const { LoginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const HandleUserRoute = (req, res) => {
	const method = req.method;

	//登录
	if (method === 'POST' && req.path === '/api/user/login') {
		const { username, password } = req.body;
		const result = LoginCheck(username, password);
		if (result) {
			return new SuccessModel();
		} else {
			return new ErrorModel('登录失败');
		}
	}
};

module.exports = HandleUserRoute;
