import React, { Fragment, PureComponent } from 'react';
import Content from './content/index';
import Nav from './nav/index';
import { MainWapper } from './style';

class Main extends PureComponent {
	render() {
		return (
			<Fragment>
				<MainWapper>
					<Nav></Nav>
					<Content></Content>
				</MainWapper>
			</Fragment>
		);
	}
}

export default Main;
