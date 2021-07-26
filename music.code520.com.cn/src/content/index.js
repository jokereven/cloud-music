import React, { Fragment, PureComponent } from 'react';
import Main from './main/index';
import Nav from './nav/index';
import { ContentWapper } from './style';

class Content extends PureComponent {
	render() {
		return (
			<Fragment>
				<ContentWapper>
					<Nav></Nav>
					<Main></Main>
				</ContentWapper>
			</Fragment>
		);
	}
}

export default Content;
