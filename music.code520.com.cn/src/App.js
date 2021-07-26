import React, { Fragment, PureComponent } from 'react';
/* 全局样式 */
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './common/footer/index';
/* 组件 */
import Header from './common/header/index';
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<BrowserRouter>
					<Route path='/' component={Header}></Route>
					<Route path='/' component={Footer}></Route>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
