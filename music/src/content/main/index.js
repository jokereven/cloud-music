import { Carousel, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as FooteractionCreators } from '../../common/footer/store';
import { actionCreators as FlvMasactionCreators } from '../flv-mas/store';
import { actionCreators } from './store';
import {
	AddASongListWapper,
	AddTitle,
	CodeMusicWapper,
	ExclusiveList,
	ExclusiveListWapper,
	ExclusiveTitle,
	ExclusiveWapper,
	GlobalList,
	GlobalListWapper,
	LeaderboardWapper,
	MainFindWapper,
	OfficialListWapper,
	RecommendedMvBox,
	RecommendedMvList,
	RecommendedMvTitle,
	RecommendedMvWapper,
	RecommendList,
	RecommendListWapper,
	RecommendWapper,
	SongListHeader,
	SongListWapper,
	UpToDateBox,
	UpToDateList,
	UpToDateTitle,
	UpToDateWapper,
} from './style';

const contentStyle = {
	height: '100%',
};
const { TabPane } = Tabs;

class Main extends PureComponent {
	render() {
		const {
			bannerpic,
			addmusic,
			redommend,
			exclusivede,
			latestmusic,
			latestmv,
			songListtype,
			songList,
			changeTheSongListType,
			leaderboard,
			singerList,
			playExclusiveDelivery,
		} = this.props;
		return (
			<Fragment>
				<MainFindWapper>
					<Tabs defaultActiveKey='1' style={{ marginLeft: '12px' }}>
						<TabPane tab='推荐歌单' key='1'>
							<RecommendWapper>
								<Carousel autoplay className='carousel'>
									{bannerpic
										? bannerpic.map((item, index) => {
												if (
													item.get('targetType') === 1 &&
													item.get('typeTitle') !== 'VIP专享'
												) {
													return (
														<div
															key={index}
															onClick={() => addmusic(item.get('targetId'))}
														>
															<img
																key={index}
																style={contentStyle}
																src={item.get('imageUrl')}
																alt={item.get('typeTitle')}
																title={item.get('typeTitle')}
															></img>
														</div>
													);
												}
										  })
										: ''}
								</Carousel>
								<AddASongListWapper>
									<AddTitle>推荐歌单 {'>'}</AddTitle>
									<RecommendListWapper>
										{redommend
											? redommend.map((item, index) => {
													return (
														<RecommendList key={index}>
															<div className='redommend-box' key={index}>
																<a
																	href={`/playlist/${item.get('id')}/songs`}
																	key={index}
																>
																	<img
																		src={item.get('picUrl')}
																		alt={item.get('name')}
																	></img>
																</a>
																<p>{item.get('name')}</p>
															</div>
														</RecommendList>
													);
											  })
											: ''}
									</RecommendListWapper>
								</AddASongListWapper>
								<ExclusiveWapper>
									<ExclusiveTitle>独家放送 {'>'}</ExclusiveTitle>
									<ExclusiveListWapper>
										{exclusivede
											? exclusivede.map((item, index) => {
													return (
														<ExclusiveList key={index}>
															<div key={index}>
																<img
																	onClick={() =>
																		playExclusiveDelivery(item.get('id'))
																	}
																	src={item.get('picUrl')}
																	alt={item.get('copywriter')}
																></img>
																<p>{item.get('name')}</p>
															</div>
														</ExclusiveList>
													);
											  })
											: ''}
									</ExclusiveListWapper>{' '}
								</ExclusiveWapper>
								<UpToDateWapper>
									<UpToDateTitle>最新音乐 &gt;</UpToDateTitle>
									<UpToDateBox>
										{UpToDateList
											? latestmusic.map((item, index) => {
													return (
														<UpToDateList
															key={index}
															onClick={() => addmusic(item.get('id'))}
														>
															<img
																src={item.get('picUrl')}
																alt={item.get('name')}
																key={index}
															></img>
															<div className='uptodatename'>
																<p>{item.get('name')}</p>
																{item
																	.get('song')
																	.get('artists')
																	.map((val, num) => {
																		return (
																			<span key={num}>{val.get('name')}</span>
																		);
																	})}
															</div>
														</UpToDateList>
													);
											  })
											: ''}
									</UpToDateBox>
								</UpToDateWapper>
								<RecommendedMvWapper>
									<RecommendedMvTitle>推荐MV &gt;</RecommendedMvTitle>
									<RecommendedMvBox>
										{latestmv
											? latestmv.map((item, index) => {
													return index <= 2 ? (
														<RecommendedMvList key={index}>
															<img
																onClick={() =>
																	playExclusiveDelivery(item.get('id'))
																}
																title={item.get('copywriter')}
																src={item.get('picUrl')}
																alt={item.get('copywriter')}
															></img>
															<p>{item.get('name')}</p>
															<span>{item.get('artistName')}</span>
														</RecommendedMvList>
													) : (
														''
													);
											  })
											: ''}
									</RecommendedMvBox>
								</RecommendedMvWapper>
								<CodeMusicWapper>
									生活到处是磨难，为难我的人多了，你算老几。
								</CodeMusicWapper>
							</RecommendWapper>
						</TabPane>
						<TabPane tab='歌单' key='2'>
							<SongListWapper>
								<SongListHeader>
									<h2>歌单</h2>
									<div className='type'>
										{songListtype
											? songListtype.map((item, index) => {
													return (
														<span
															key={index}
															onClick={() =>
																changeTheSongListType(item.get('name'))
															}
														>
															{item.get('name')}
														</span>
													);
											  })
											: ''}
									</div>
								</SongListHeader>
								<div className='recommend'>
									{songList
										? songList.map((item, index) => {
												return (
													<a
														href={`/playlist/${item.get('id')}/songs`}
														key={index}
													>
														<div className='father' key={index}>
															<img
																src={item.get('coverImgUrl')}
																alt='code520'
															></img>
															<p>{item.get('name')}</p>
														</div>
													</a>
												);
										  })
										: ''}
								</div>
							</SongListWapper>
						</TabPane>
						<TabPane tab='排行榜' key='3'>
							<LeaderboardWapper>
								<h2>官方榜</h2>
								{leaderboard
									? leaderboard.map((item, index) => {
											return index < 4 ? (
												<OfficialListWapper key={index}>
													<a
														href={`/playlist/${item.get('id')}/songs`}
														key={index}
													>
														<img
															src={item.get('coverImgUrl')}
															alt={item.get('name')}
														></img>
													</a>
													<p>{item.get('updateFrequency')}</p>
													<p>{item.get('description')}</p>
													<p>{item.get('name')}</p>
												</OfficialListWapper>
											) : (
												''
											);
									  })
									: ''}
								<h2>全球榜</h2>
								<GlobalListWapper>
									{leaderboard
										? leaderboard.map((item, index) => {
												return index >= 4 ? (
													<GlobalList key={index}>
														<a
															key={index}
															href={`/playlist/${item.get('id')}/songs`}
														>
															<img
																src={item.get('coverImgUrl')}
																alt={item.get('name')}
															></img>
														</a>
														<p>{item.get('name')}</p>
													</GlobalList>
												) : (
													''
												);
										  })
										: ''}
								</GlobalListWapper>
							</LeaderboardWapper>
						</TabPane>
					</Tabs>
				</MainFindWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.disbanner();
		this.props.disrecommend();
		this.props.exclusivedelivery();
		this.props.latestMusic();
		this.props.latestMv();
		this.props.songListClassification();
		this.props.getTherecommendSongList();
		this.props.getALeaderboard();
	}
}

export const MapStateToProps = (state) => {
	return {
		bannerpic: state.getIn(['bannerlist', 'bannerlist', 'banners']),
		redommend: state.getIn(['bannerlist', 'maindecommendlist']),
		exclusivede: state.getIn(['bannerlist', 'exclusiveDelivery']),
		latestmusic: state.getIn(['bannerlist', 'latestMusic']),
		latestmv: state.getIn(['bannerlist', 'latestMV']),
		listenlist: state.getIn(['bannerlist', 'listenlist', 'list']),
		songListtype: state.getIn(['bannerlist', 'songListType', 'tags']),
		songList: state.getIn(['bannerlist', 'recommendedSongList', 'playlists']),
		leaderboard: state.getIn(['bannerlist', 'ranking', 'list']),
		singerList: state.getIn(['bannerlist', 'ranking', 'artistToplist']),
		thevedio: state.getIn(['vediomv', 'videoData', 'data']),
	};
};

export const MapDispatchToProps = (dispatch) => {
	return {
		disbanner() {
			dispatch(actionCreators.Disbanner());
		},
		disrecommend() {
			dispatch(actionCreators.Disrecommend());
		},
		exclusivedelivery() {
			dispatch(actionCreators.Exclusivedelivery());
		},
		latestMusic() {
			dispatch(actionCreators.LatestMusic());
		},
		latestMv() {
			dispatch(actionCreators.LatestMv());
		},
		addmusic(targetid) {
			dispatch(FooteractionCreators.AddMusic(targetid));
			dispatch(FooteractionCreators.BannerMusicPlay());
		},
		songListClassification() {
			dispatch(actionCreators.SongListClassification());
		},
		getTherecommendSongList() {
			dispatch(actionCreators.GetTherecommendSongList());
		},
		changeTheSongListType(type) {
			// console.log(type);
			dispatch(actionCreators.ChangeTheSongListType(type));
		},
		getALeaderboard() {
			dispatch(actionCreators.GetALeaderboard());
		},
		playExclusiveDelivery(id) {
			dispatch(FlvMasactionCreators.GetmvPlayAddress(id));
		},
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(Main);
