import React, { Fragment, PureComponent } from 'react';
import Content from './content';
import Nav from './nav';
import { MainWapper } from './style';

class Main extends PureComponent {
	render() {
		return (
			<Fragment>
				<MainWapper>
					<Nav />
					<Content />
				</MainWapper>
			</Fragment>
		);
	}
}

export default Main;
