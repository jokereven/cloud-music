import React, { Component, Fragment } from 'react';
import Code from './code/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<Code></Code>
			</Fragment>
		);
	}
}

export default App;
