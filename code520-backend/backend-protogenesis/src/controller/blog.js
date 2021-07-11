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

module.exports = {
	GetList,
};
