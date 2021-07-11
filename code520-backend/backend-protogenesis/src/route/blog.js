const { GetList, GetDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const HandleBlogRoute = (req, res) => {
	const method = req.method;

	//获取博客列表
	if (method === 'GET' && req.path === '/api/blog/list') {
		const author = req.query.author || '';
		const keyword = req.query.keyword || '';
		const ListData = GetList(author, keyword);
		return new SuccessModel(ListData);
	}

	//获取博客详情
	if (method === 'GET' && req.path === '/api/blog/detail') {
		const id = req.query.id;
		const data = GetDetail(id);
		return new SuccessModel(data);
	}

	//新建一篇博客
	if (method === 'POST' && req.path === '/api/blog/new') {
		return {
			msg: '这是新建博客的接口',
		};
	}

	//更新一篇博客
	if (method === 'POST' && req.path === '/api/blog/update') {
		return {
			msg: '这是更新博客的接口',
		};
	}

	//删除一篇博客
	if (method === 'POST' && req.path === '/api/blog/del') {
		return {
			msg: '这是删除博客的接口',
		};
	}
};

module.exports = HandleBlogRoute;
