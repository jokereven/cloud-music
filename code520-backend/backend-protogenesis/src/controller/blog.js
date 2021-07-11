//获取博客列表
const GetList = (author, keyword) => {
	return [
		{
			id: 1,
			title: '标题a',
			content: '内容a',
			CreateTime: 1625970670425,
			author: 'joker',
		},
		{
			id: 2,
			title: '标题b',
			content: '内容b',
			CreateTime: 1625970729708,
			author: 'even',
		},
	];
};
//获取博客详情
const GetDetail = (id) => {
	return {
		id: 1,
		title: '标题a',
		content: '内容a',
		CreateTime: 1625970670425,
		author: 'joker',
	};
};
//创建一篇博客
const NewBlog = (blogdata = {}) => {
	//blogdata是一个博客对象 包含title content属性
	return {
		id: 3, //新建博客插入到数据表
	};
};
//更新一篇博客
const UpDateBlog = (id, blogdata = {}) => {
	//id是要更新的博客的id
	//blogdata是一个博客对象 包含title content属性
	console.log('UpDataBlog', id, blogdata);
	return true;
};
//删除一篇博客
const DelBlog = (id) => {
	//id是要删除的博客的id
	return true;
};
module.exports = {
	GetList,
	GetDetail,
	NewBlog,
	UpDateBlog,
	DelBlog,
};
