import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/* 组件 */
import After from './code520/after/index';
import Front from './code520/front/index';
import Lift from './code520/life/index';
import More from './code520/more/index';
import Ops from './code520/ops/index';
import Stack from './code520/stack/index';
import Nav from './common/nav/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends Component {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<BrowserRouter>
					{/* 组件 */}
					<Route path='/' component={Nav}></Route>
					<Route path='/front' exact component={Front}></Route>
					<Route path='/after' exact component={After}></Route>
					<Route path='/ops' exact component={Ops}></Route>
					<Route path='/stack' exact component={Stack}></Route>
					<Route path='/life' exact component={Lift}></Route>
					<Route path='/more' exact component={More}></Route>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
