import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Video from './flv-mas/index';
import LiveStreaming from './live-broadcast/index';
import Login from './login/index';
import Main from './main/index';
import Nav from './nav/index';
import PlayList from './playlist';
import PrivateFM from './private-fm/index';
import RecentlyPlayed from './recently-played';
import SearchList from './searchlist/loadable';
import { ContentWapper } from './style';
import User from './user/index';

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
						<Route path='/search-list/:key/music' component={SearchList}></Route>
						<Route path='/playlist/:id/songs' component={PlayList}></Route>
						<Route path='/user/:id/music' exact component={User}></Route>
						<Route
							path='/recently-played'
							exact
							component={RecentlyPlayed}
						></Route>
						<Route
							path='/live-broadcast'
							exact
							component={LiveStreaming}
						></Route>
						<Route path='/private-fm' exact component={PrivateFM}></Route>
					</BrowserRouter>
				</ContentWapper>
			</Fragment>
		);
	}
}

export default Content;
