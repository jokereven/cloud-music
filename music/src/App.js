import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './common/footer';
import Header from './common/header';
/* 组件 */
import Main from './main';
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
					<Footer />
					<Main />
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
