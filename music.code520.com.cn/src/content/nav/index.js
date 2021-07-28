import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { NavWapper, NavWapperList } from './style';

class Nav extends PureComponent {
	render() {
		return (
			<Fragment>
				<NavWapper>
					<Link to='/individuation'>
						<NavWapperList>发现音乐</NavWapperList>
					</Link>
					<Link to='/video'>
						<NavWapperList>视频</NavWapperList>
					</Link>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
					<NavWapperList>...</NavWapperList>
				</NavWapper>
			</Fragment>
		);
	}
}

export default Nav;
