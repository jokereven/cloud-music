const { LoginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const HandleUserRoute = (req, res) => {
	const method = req.method;

	//登录
	if (method === 'POST' && req.path === '/api/user/login') {
		const { username, password } = req.body;
		const result = LoginCheck(username, password);
		return result.then((data) => {
			if (data.username) {
				return new SuccessModel();
			}
			return new ErrorModel('登录失败');
		});
	}
	return;
};

module.exports = HandleUserRoute;
