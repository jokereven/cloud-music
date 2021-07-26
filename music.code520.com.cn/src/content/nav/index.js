import React, { Fragment, PureComponent } from 'react';
import { NavWapper, NavWapperList } from './style';

class Nav extends PureComponent {
	render() {
		return (
			<Fragment>
				<NavWapper>
					<NavWapperList>发现</NavWapperList>
					<NavWapperList>视频</NavWapperList>
					<NavWapperList>准备</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
					<NavWapperList>加载中...</NavWapperList>
				</NavWapper>
			</Fragment>
		);
	}
}

export default Nav;
