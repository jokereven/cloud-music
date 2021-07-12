const env = process.env.NODE_ENV; // 环境参数

// 配置
let MYSQL_CONF;

if (env === 'dev') {
	// mysql
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'code520',
	};
}

if (env === 'production') {
	// mysql
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'code520',
	};
}

module.exports = {
	MYSQL_CONF,
};
