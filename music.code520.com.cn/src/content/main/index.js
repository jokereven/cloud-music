import React, { Fragment, PureComponent } from 'react';
import {
	MainFindWapper,
	MainFindWapperNav,
	MainFindWapperNavList,
} from './style';

class Main extends PureComponent {
	render() {
		return (
			<Fragment>
				<MainFindWapper>
					<MainFindWapperNav>
						<MainFindWapperNavList>推荐</MainFindWapperNavList>
						<MainFindWapperNavList>歌单</MainFindWapperNavList>
						<MainFindWapperNavList>排行榜</MainFindWapperNavList>
						<MainFindWapperNavList>歌手</MainFindWapperNavList>
						<MainFindWapperNavList>最新音乐</MainFindWapperNavList>
					</MainFindWapperNav>
				</MainFindWapper>
			</Fragment>
		);
	}
}

export default Main;
