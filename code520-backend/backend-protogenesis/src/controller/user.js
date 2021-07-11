const LoginCheck = (username, password) => {
	if (username === 'joker' && password === '123456') {
		return true;
	}
	return false;
};

module.exports = {
	LoginCheck,
};
