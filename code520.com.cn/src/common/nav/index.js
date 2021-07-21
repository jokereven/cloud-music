import { Input } from 'antd';
import 'antd/dist/antd.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IconfontStyle } from '../../static/iconfont/iconfont';
import {
	NavWapper,
	NavWapperWarp,
	NavWapperWarpList,
	NavWapperWarpListWapper,
	NavWapperWarpLogo,
	NavWapperWarpLogoWapper,
} from './style';

class Nav extends Component {
	render() {
		return (
			<Fragment>
				<IconfontStyle />
				<NavWapper>
					<NavWapperWarp>
						<Link to={'/'}>
							<NavWapperWarpLogoWapper>
								<NavWapperWarpLogo></NavWapperWarpLogo>
								<h1>code520</h1>
							</NavWapperWarpLogoWapper>
						</Link>
						<NavWapperWarpListWapper>
							<Link to={'/front'}>
								<NavWapperWarpList>前端</NavWapperWarpList>
							</Link>
							<Link to={'/after'}>
								<NavWapperWarpList>后端</NavWapperWarpList>
							</Link>
							<Link to={'/ops'}>
								<NavWapperWarpList>运维</NavWapperWarpList>
							</Link>
							<Link to={'/stack'}>
								<NavWapperWarpList>项目</NavWapperWarpList>
							</Link>
							<Link to={'/life'}>
								<NavWapperWarpList>生活</NavWapperWarpList>
							</Link>
							<Link to={'/more'}>
								<NavWapperWarpList>...</NavWapperWarpList>
							</Link>
						</NavWapperWarpListWapper>
						<div id='serach-box'>
							<Input placeholder='code520' />
							<span className='iconfont' id='iconfont-search'>
								&#xe617;
							</span>
						</div>
						<div>
							<a href='https://github.com/jokereven' id='me' target="_new">
								关于我
							</a>
						</div>
					</NavWapperWarp>
				</NavWapper>
			</Fragment>
		);
	}
}

export default Nav;
