import { Carousel, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as FooteractionCreators } from '../../common/footer/store';
import { actionCreators } from './store';
import {
	AddASongListWapper,
	AddTitle,
	ExclusiveList,
	ExclusiveListWapper,
	ExclusiveTitle,
	ExclusiveWapper,
	ListenTitle,
	ListenWapper,
	MainFindWapper,
	RecommendedMvBox,
	RecommendedMvList,
	RecommendedMvTitle,
	RecommendedMvWapper,
	RecommendList,
	RecommendListWapper,
	RecommendWapper,
	UpToDateBox,
	UpToDateList,
	UpToDateTitle,
	UpToDateWapper,
	CodeMusicWapper,
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
																<img src={item.get('picUrl')}></img>
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
																<img src={item.get('picUrl')}></img>
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
														<UpToDateList key={index}>
															<img src={item.get('picUrl')} key={index}></img>
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
															<img src={item.get('picUrl')}></img>
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
							2
						</TabPane>
						<TabPane tab='排行榜' key='3'>
							3
						</TabPane>
						<TabPane tab='歌手' key='4'>
							4
						</TabPane>
						<TabPane tab='最新音乐' key='5'>
							5
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
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(Main);
