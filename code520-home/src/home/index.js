/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { Component, Fragment } from 'react';
import {
	HomeWapper,
	HomeWapperCollect,
	HomeWapperCollectList,
	HomeWapperSearch,
} from './style';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<HomeWapper>
					<form action='https://cn.bing.com/search' method='get' target='_new'>
						<HomeWapperSearch
							type='text'
							placeholder='请输入要搜索的内容'
							name='q'
						></HomeWapperSearch>
					</form>
					<HomeWapperCollect>
						<HomeWapperCollectList href='http://code520.com.cn' target='_new'>
							<img
								src='https://cdn4.iconfinder.com/data/icons/eon-education-i/32/program_code_coding-256.png'
								alt='code520'
								title='code520'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='http://home.code520.com.cn'
							target='_new'
						>
							<img
								src='https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_code_coding_laptop-256.png'
								alt='code520-home'
								title='code520-home'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='http://zhou125disorder.icu'
							target='_new'
						>
							<img
								src='https://gitee.com/jokereven/PicGo_img/raw/master/PicGo/joker.png'
								alt='zhou125disorder.icu'
								title='zhou125disorder'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://github.com/' target='_new'>
							<img
								src='https://tse1-mm.cn.bing.net/th?id=OIP-C.GUGGy2yp-EOTiI6JdGeH2gAAAA&w=96&h=97&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
								alt='github'
								title='github'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='http://gitee.com' target='_new'>
							<img
								src='https://gitee.com/assets/favicon.ico'
								alt='gitee'
								title='gitee'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://codechina.csdn.net/'
							target='_new'
						>
							<img
								src='https://codechina.csdn.net/uploads/-/system/group/avatar/11/logo-1_1_copy.png?width=72'
								alt='codechina'
								title='codechina'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://e.coding.net/' target='_new'>
							<img
								src='https://coding-net-production-pp-ci.codehub.cn/9837b4a6-442b-4513-b51d-a2030c4a6ede.png'
								alt='e.coding'
								title='e.coding'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://www.google.com/' target='_new'>
							<img
								src='https://www.google.com/favicon.ico'
								alt='google'
								title='google'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://cn.bing.com/' target='_new'>
							<img
								src='https://cn.bing.com/sa/simg/favicon-2x.ico'
								alt='bing'
								title='bing'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://www.imooc.com/' target='_new'>
							<img
								src='https://pic2.zhimg.com/50/8501315f73063a1d6c7517f62282995a_720w.png?source=54b3c3a5'
								alt='imooc'
								title='imooc'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://study.163.com/' target='_new'>
							<img
								src='https://pic3.zhimg.com/50/v2-1215530a86688814c1de199687bb0459_720w.jpg?source=54b3c3a5'
								alt='mooc中国大学'
								title='mooc中国大学'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.icourse163.org/'
							target='_new'
						>
							<img
								src='https://pic1.zhimg.com/50/7da9ae42b_720w.jpg?source=54b3c3a5'
								alt='code520-home'
								title='code520-home'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://xdclass.net/' target='_new'>
							<img
								src='https://sxsimg.xiaoyuanzhao.com/8C/ED/8C7ACC2C0D8647C4942B6BC0B0B19EED.png'
								alt='小滴课堂'
								title='小滴课堂'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.bilibili.com/'
							target='_new'
						>
							<img
								src='https://www.bilibili.com/favicon.ico'
								alt='bilibili'
								title='bilibili'
								style={{ background: '#fff' }}
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.nowcoder.com/'
							target='_new'
						>
							<img
								src='https://www.nowcoder.com/favicon.ico'
								alt='nowcoder'
								title='nowcoder'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://leetcode-cn.com/'
							target='_new'
						>
							<img
								src='https://leetcode-cn.com/favicon.ico'
								alt='leetcode-cn'
								title='leetcode-cn'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.liaoxuefeng.com/'
							target='_new'
						>
							<img
								src='https://www.liaoxuefeng.com/favicon.ico'
								alt='liaoxuefeng'
								title='liaoxuefeng'
								style={{ background: '#fff' }}
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.liwenzhou.com/'
							target='_new'
						>
							<img
								src='https://www.liwenzhou.com/favicon.ico'
								alt='liwenzhou'
								title='liwenzhou'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://es6.ruanyifeng.com/'
							target='_new'
						>
							<img
								src='https://es6.ruanyifeng.com/favicon.ico'
								alt='ruanyifeng'
								title='ruanyifeng'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://emojipedia.org/' target='_new'>
							<img
								src='https://emojipedia.org/static/img/logo/emojipedia-logo-140.0d779a8a903c.png'
								alt='emojipedia'
								title='emojipedia'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://www.code-nav.cn/'
							target='_new'
						>
							<img
								src='data:image/png;base64,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'
								alt='编程导航'
								title='编程导航'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://www.zhihu.com/' target='_new'>
							<img
								src='https://pic3.zhimg.com/50/v2-4cd83ae3d6ca76dabecf001244a62310_720w.png?source=54b3c3a5'
								alt='zhihu'
								title='zhihu'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://chrome.zzzmh.cn/#ext'
							target='_new'
						>
							<img
								src='https://res.zzzmh.cn/chrome/img/logo/chrome_line.png'
								alt='浏览器插件'
								title='浏览器插件'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://withpinbox.com/' target='_new'>
							<img
								src='https://withpinbox.com/favicon.ico'
								alt='pinbox'
								title='pinbox'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://greyireland.gitbook.io/algorithm-pattern/'
							target='_new'
						>
							<img
								src='https://cdn4.iconfinder.com/data/icons/emojis-flat-pixel-perfect/64/emoji-64-256.png'
								alt='Go语言数据结构'
								title='Go语言数据结构'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='http://vrg123.com/' target='_new'>
							<img
								src='https://cdn1.iconfinder.com/data/icons/internet-security-3/64/x-03-256.png'
								alt='激活码'
								title='激活码'
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='https://objtube.github.io/front-end-roadmap/#/'
							target='_new'
						>
							<img
								src='https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/OK-256.png'
								alt='前端学习线路'
								title='前端学习线路'
								style={{background:"#fff"}}
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList
							href='http://www.godbasin.com/'
							target='_new'
						>
							<img
								src='https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/OK-256.png'
								alt='前端游乐场'
								title='前端游乐场'
								style={{ background: '#fff' }}
							></img>
						</HomeWapperCollectList>
						<HomeWapperCollectList href='https://fe.padding.me/' target='_new'>
							<img
								src='https://cdn2.iconfinder.com/data/icons/flat-icons-web/40/OK-256.png'
								alt='前端面试题'
								title='前端面试题'
								style={{ background: '#fff' }}
							></img>
						</HomeWapperCollectList>
					</HomeWapperCollect>
				</HomeWapper>
			</Fragment>
		);
	}
}

export default Home;
