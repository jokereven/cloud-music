import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/index';
import Nav from './nav/index';
import Login from './login/index';
import SearchList from './searchlist/loadable';
import { ContentWapper } from './style';
import Video from './flv-mas/index';

class Content extends PureComponent {
	render() {
		return (
			<Fragment>
				<ContentWapper>
					<BrowserRouter>
						<Nav />
						<Route path='/' exact component={Main}></Route>
						<Route path='/individuation/login' exact component={Login}></Route>
						<Route path='/flv-mas' exact component={Video}></Route>
						<Route path='/search-list/:key' component={SearchList}></Route>
					</BrowserRouter>
				</ContentWapper>
			</Fragment>
		);
	}
}

export default Content;
