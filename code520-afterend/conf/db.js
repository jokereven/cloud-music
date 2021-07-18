// 环境参数
const env = process.env.NODE_ENV;

// 配置
let MYSQL_CONF;
let REDIS_CONF;

if (env === 'dev') {
	// mysql
	MYSQL_CONF = {
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'code520',
	};

	// redis
	REDIS_CONF = {
		port: 6379,
		host: '127.0.0.1',
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

	// redis
	REDIS_CONF = {
		port: 6379,
		host: '127.0.0.1',
	};
}

module.exports = {
	MYSQL_CONF,
	REDIS_CONF,
};
