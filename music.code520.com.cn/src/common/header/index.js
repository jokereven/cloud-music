import React, { Component, Fragment } from 'react';
import { HeaderWapper, HeaderWapperLogo } from './style';

class Header extends Component {
	render() {
		return (
			<Fragment>
				<HeaderWapper>
					<HeaderWapperLogo></HeaderWapperLogo>
				</HeaderWapper>
			</Fragment>
		);
	}
}

export default Header;
