import React, { Fragment, PureComponent } from 'react';
import { Provider } from 'react-redux';
/* 组件 */
import { BrowserRouter,Route } from 'react-router-dom';
import Footer from './common/footer/index';
import Header from './common/header/index';
import Content from './content/index';
import store from './store/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<Provider store={store}>
					<BrowserRouter>
						<Header />
						<Route path='/' component={Content}></Route>
						<Footer />
					</BrowserRouter>
				</Provider>
			</Fragment>
		);
	}
}

export default App;
