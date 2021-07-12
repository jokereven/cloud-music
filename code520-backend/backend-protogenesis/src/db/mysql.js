const mysql = require('mysql');
const { MYSQL_CONF } = require('../conf/db');

// 创建链接对象
const connection = mysql.createConnection(MYSQL_CONF);

// 开始链接
connection.connect();

// 统一执行 sql 的函数
function exec(sqlstr) {
	const promise = new Promise((resolve, reject) => {
		connection.query(sqlstr, (err, result) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(result);
		});
	});
	return promise;
}

module.exports = {
	exec,
	escape: mysql.escape,
};
