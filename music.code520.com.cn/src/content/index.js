import React, { Fragment, PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/index';
import Nav from './nav/index';
import SearchList from './searchlist/loadable';
import { ContentWapper } from './style';
import Video from './video/index';

class Content extends PureComponent {
	render() {
		return (
			<Fragment>
				<ContentWapper>
					<BrowserRouter>
						<Nav />
						<Route path='/individuation' component={Main}></Route>
						<Route path='/flv-mas' exact component={Video}></Route>
						<Route path='/search-list/' component={SearchList}></Route>
					</BrowserRouter>
				</ContentWapper>
			</Fragment>
		);
	}
}

export default Content;
