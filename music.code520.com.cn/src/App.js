import React, { Fragment, PureComponent } from 'react';
import { Provider } from 'react-redux';
/* 组件 */
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
					<Header />
					<Footer />
					<Content />
				</Provider>
			</Fragment>
		);
	}
}

export default App;
