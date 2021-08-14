import { Tabs } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import { MVWapper, VideoMVWapper, VideoWapper } from './style';

const { TabPane } = Tabs;

class Video extends PureComponent {
	render() {
		const {
			thevedio,
			playVideo,
			videoPlayAddress,
			getVideo,
			mvdata,
			getmvPlayAddress,
		} = this.props;
		return (
			<Fragment>
				<VideoMVWapper>
					<Tabs
						defaultActiveKey='1'
						style={{ marginTop: '12px', marginLeft: '16px' }}
					>
						<TabPane tab='视频' key='1'>
							<VideoWapper>
								<h2>视频</h2>
								<div className='father'>
									{thevedio
										? thevedio.map((item, index) => {
												return (
													<div key={index}>
														<img
															onClick={() => playVideo(item.get('vid'))}
															src={item.get('coverUrl')}
															alt={item.get('title')}
														></img>
														<span>{item.get('title')}</span>
													</div>
												);
										  })
										: ''}
									<div className='refresh' onClick={getVideo}>
										刷新
									</div>
								</div>
							</VideoWapper>
						</TabPane>
						<TabPane tab='MV' key='2'>
							<MVWapper>
								<h2>最新MV</h2>
								<div className='father'>
									{mvdata
										? mvdata.map((item, index) => {
												return (
													<div key={index}>
														<img
															src={item.get('cover')}
															alt={item.get('name')}
															onClick={() => getmvPlayAddress(item.get("id"))}
														></img>
														<p>{item.get('name')}</p>
														<span>{item.get('artistName')}</span>
													</div>
												);
										  })
										: ''}
								</div>
							</MVWapper>
						</TabPane>
					</Tabs>
				</VideoMVWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getVideo();
		this.props.getMV();
	}
}

export const MapState = (state) => {
	return {
		thevedio: state.getIn(['vediomv', 'videoData', 'data']),
		videoPlayAddress: state.getIn(['vediomv', 'playAddress', 'urls']),
		mvdata: state.getIn(['vediomv', 'mvData', 'data']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getVideo() {
			dispatch(actionCreators.GetVideo());
		},
		playVideo(vid) {
			dispatch(actionCreators.getVideoPlaybackAddresses(vid));
		},
		getMV() {
			dispatch(actionCreators.getMv());
		},
		getmvPlayAddress(id) {
			dispatch(actionCreators.GetmvPlayAddress(id));
		}
	};
};

export default connect(MapState, MapDispatch)(Video);
