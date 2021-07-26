import React, { Fragment, PureComponent } from 'react';
/* 组件 */
import Footer from './common/footer/index';
import Header from './common/header/index';
import Content from './content/index';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<Header />
				<Footer />
				<Content />
			</Fragment>
		);
	}
}

export default App;
