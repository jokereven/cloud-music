const { exec } = require('../db/mysql');

const LoginCheck = (username, password) => {
	const sqlstr = `
	select username, realname from users
	where username='${username}' and password='${password}'`;
	return exec(sqlstr).then((rows) => {
		return rows[0] || {};
	});
};

module.exports = {
	LoginCheck,
}; 	
