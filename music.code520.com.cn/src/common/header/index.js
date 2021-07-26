import React, { Fragment, PureComponent } from 'react';
import { HeaderWapper, HeaderWapperLogo } from './style';

class Header extends PureComponent {
	render() {
		return (
			<Fragment>
				<HeaderWapper>
					<HeaderWapperLogo>
						<div></div>
						<p>音乐</p>
					</HeaderWapperLogo>
				</HeaderWapper>
			</Fragment>
		);
	}
}

export default Header;
