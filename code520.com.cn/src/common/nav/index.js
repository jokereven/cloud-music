import { Input } from 'antd';
import 'antd/dist/antd.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
								<NavWapperWarpList>GoReactTaro</NavWapperWarpList>
							</Link>
							<Link to={'/life'}>
								<NavWapperWarpList>程序人生</NavWapperWarpList>
							</Link>
							<Link to={'/more'}>
								<NavWapperWarpList>...</NavWapperWarpList>
							</Link>
						</NavWapperWarpListWapper>
						<Input placeholder='code520' />
						<div>
							<a href='/login'>登录</a>
						</div>
					</NavWapperWarp>
				</NavWapper>
			</Fragment>
		);
	}
}

export default Nav;
