const mysql = require('mysql');

//创建链接对象
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'code520',
});

//连接数据库
connection.connect();

//执行sql语句
const sqlstr = 'select * from users';
connection.query(sqlstr, (err, result) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
});

//关闭连接
connection.end();
