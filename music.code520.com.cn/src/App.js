import React, { Fragment, PureComponent } from 'react';
/* 全局样式 */
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
			</Fragment>
		);
	}
}

export default App;
