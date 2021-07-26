import React, { Fragment, PureComponent } from 'react';
import { NavWapper, NavWapperList } from './style';

class Nav extends PureComponent {
	render() {
		return (
			<Fragment>
				<NavWapper>
					<NavWapperList>发现音乐</NavWapperList>
					<NavWapperList>更多</NavWapperList>
					<NavWapperList>更多</NavWapperList>
					<NavWapperList>更多</NavWapperList>
					<NavWapperList>更多</NavWapperList>
					<NavWapperList>更多</NavWapperList>
				</NavWapper>
			</Fragment>
		);
	}
}

export default Nav;
