const HandleUserRoute = (req, res) => {
	const method = req.method;

	//登入
	if (method === 'POST' && req.path === '/api/user/login') {
		return {
			msg: '这是登入的接口',
		};
	}
};

module.exports = HandleUserRoute;
