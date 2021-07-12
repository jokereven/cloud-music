const { exec } = require('../db/mysql');

//获取博客列表
const GetList = (author, keyword) => {
	let sqlstr = ` select * from blogs where 1=1`;
	if (author) {
		sqlstr += ` and author ='${author}' `;
	}
	if (keyword) {
		sqlstr += ` and title like '%${keyword}%' `;
	}
	sqlstr += ` order by createtime desc; `;

	//返回promise
	return exec(sqlstr);
};
//获取博客详情
const GetDetail = (id) => {
	const sqlstr = `select * from blogs where id = '${id}'`;
	return exec(sqlstr).then((rows) => {
		return rows[0];
	});
};
//创建一篇博客
const NewBlog = (blogdata = {}) => {
	//blogdata是一个博客对象 包含title content属性
	const title = blogdata.title;
	const content = blogdata.content;
	const author = blogdata.author;
	const createTime = Date.now();

	const sqlstr = `
	insert into blogs (title,content,author,createtime)
	values ('${title}','${content}','${content}','${createTime}');`;

	return exec(sqlstr).then((insertData) => {
		console.log('inserData is', insertData);
		return {
			id: insertData.insertId,
		};
	});
};
//更新一篇博客
const UpDateBlog = (id, blogdata = {}) => {
	//id是要更新的博客的id
	//blogdata是一个博客对象 包含title content属性
	// console.log('UpDataBlog', id, blogdata);
	// return true;
	const title = blogdata.title;
	const content = blogdata.content;
	const sqlstr = `update blogs set title='${title}',content='${content}' where id = ${id}`;

	return exec(sqlstr).then((updateData) => {
		console.log('updateData is', updateData);
		if (updateData.affectedRows) {
			return true;
		}
		return false;
	});
};
//删除一篇博客
const DelBlog = (id, author) => {
	//id是要删除的博客的id
	const sqlstr = `delete from blogs where id='${id}' and author='${author}';`;
	return exec(sqlstr).then((delData) => {
		if (delData.affectedRows) {
			return true;
		}
		return false;
	});
};
module.exports = {
	GetList,
	GetDetail,
	NewBlog,
	UpDateBlog,
	DelBlog,
};
