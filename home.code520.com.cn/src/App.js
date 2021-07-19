import React, { Component, Fragment } from 'react';
import Home from './home/index';
import { GlobalStyle } from './style.js';

class App extends Component {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<Home />
			</Fragment>
		);
	}
}

export default App;
