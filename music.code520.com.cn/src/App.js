import React, { Component, Fragment } from 'react';
/* 组件 */
import Header from './common/header/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<Header/>
			</Fragment>
		);
	}
}

export default App;
