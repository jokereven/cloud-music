import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators as FMactionCreators } from '../private-fm/store';
import { actionCreators } from './store';
import {
	CollectionSongListWapper,
	ILikeMusicWapper,
	MyMusicWapper,
	NavWapper,
	NavWapperList,
	SongListWapper,
} from './style';

class Nav extends PureComponent {
	render() {
		const { loginstatus, changePrivateFM } = this.props;
		return (
			<Fragment>
				<NavWapper>
					<Link to='/individuation'>
						<NavWapperList>发现音乐</NavWapperList>
					</Link>
					<Link to='/flv-mas'>
						<NavWapperList>视频</NavWapperList>
					</Link>
					<Link to='/live-broadcast'>
						<NavWapperList>直播</NavWapperList>
					</Link>
					<a href='https://music.163.com/store/product' target='_new'>
						<NavWapperList>商城</NavWapperList>
					</a>
					<Link to='/private-fm'>
						<NavWapperList onClick={changePrivateFM}>私人FM</NavWapperList>
					</Link>
					<MyMusicWapper>我的音乐</MyMusicWapper>
					<Link to='/recently-played'>
						<NavWapperList>最近播放</NavWapperList>
					</Link>
					{loginstatus === true && (
						<Link to='/music-cloud-tray'>
							<NavWapperList>音乐云盘</NavWapperList>
						</Link>
					)}
					{loginstatus === true && (
						<Link to='/my-collection'>
							<NavWapperList>我的收藏</NavWapperList>
						</Link>
					)}
					<SongListWapper>
						<summary style={{ cursor: 'pointer' }}>创建的歌单</summary>
						<ILikeMusicWapper>我喜欢的音乐</ILikeMusicWapper>
					</SongListWapper>
					{loginstatus === true && (
						<CollectionSongListWapper>
							<summary style={{ cursor: 'pointer' }}>收藏的歌单</summary>
							<ILikeMusicWapper>code520</ILikeMusicWapper>
						</CollectionSongListWapper>
					)}
				</NavWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getloginstatus();
	}
}

export const MapState = (state) => {
	return {
		loginstatus: state.getIn(['nav', 'loginstatus']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getloginstatus() {
			dispatch(actionCreators.GetLoginStatus());
		},
		changePrivateFM() {
			dispatch(FMactionCreators.GetPrivateFmData());
		},
	};
};

export default connect(MapState, MapDispatch)(Nav);
