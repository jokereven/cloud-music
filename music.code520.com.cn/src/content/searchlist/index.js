import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	SearchListWapper,
	SearchListWapperAlbum,
	SearchListWapperFlv,
	SearchListWapperSinger,
  SearchListWapperSingle,
  SearchListWapperPlaylist
} from './style';
const { TabPane } = Tabs;

class SearchList extends PureComponent {
	render() {
		return (
			<Fragment>
				<SearchListWapper>
					<span className='search_title'>搜索"", 找到 首单曲</span>
					<Tabs defaultActiveKey='1' style={{ marginLeft: '26px' }}>
						<TabPane tab='单曲' key='1'>
							<SearchListWapperSingle></SearchListWapperSingle>
						</TabPane>
						<TabPane tab='歌手' key='2'>
							<SearchListWapperSinger></SearchListWapperSinger>
						</TabPane>
						<TabPane tab='歌单' key='3'>
							<SearchListWapperPlaylist></SearchListWapperPlaylist>
						</TabPane>
						<TabPane tab='专辑' key='4'>
							<SearchListWapperAlbum></SearchListWapperAlbum>
						</TabPane>
						<TabPane tab='MV' key='5'>
							<SearchListWapperFlv></SearchListWapperFlv>
						</TabPane>
					</Tabs>
				</SearchListWapper>
			</Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {};
};

const MapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(SearchList);
