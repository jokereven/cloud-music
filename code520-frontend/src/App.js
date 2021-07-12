import axios from 'axios';
import React, { Component, Fragment } from 'react';
class App extends Component {
	render() {
		return <Fragment></Fragment>;
	}
	componentDidMount() {
		axios
			.get('http://localhost:3000/api/blog/list')
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				console.log('ok');
			});
	}
}

export default App;
