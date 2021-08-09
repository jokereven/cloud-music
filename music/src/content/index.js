import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Video from './flv-mas/index';
import Login from './login/index';
import Main from './main/index';
import Nav from './nav/index';
import RecentlyPlayed from './recently-played';
import SearchList from './searchlist/loadable';
import { ContentWapper } from './style';

class Content extends PureComponent {
	render() {
		return (
			<Fragment>
				<ContentWapper>
					<BrowserRouter>
						<Nav />
						<Route path='/individuation' exact component={Main}></Route>
						<Route path='/individuation/login' exact component={Login}></Route>
						<Route path='/flv-mas' exact component={Video}></Route>
						<Route path='/search-list/:key' component={SearchList}></Route>
						<Route
							path='/recently-played'
							exact
							component={RecentlyPlayed}
						></Route>
					</BrowserRouter>
				</ContentWapper>
			</Fragment>
		);
	}
}

export default Content;
