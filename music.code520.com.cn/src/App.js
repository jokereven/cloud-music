import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/* 组件 */
import Footer from './common/footer/index';
import Header from './common/header/index';
import Main from './main/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<BrowserRouter>
					<Route path='/' component={Header}></Route>
					<Route path='/' component={Main}></Route>
					<Route path='/' component={Footer}></Route>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
