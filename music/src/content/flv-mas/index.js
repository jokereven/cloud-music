import { Tabs } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import { VideoMVWapper, VideoWapper } from './style';

const { TabPane } = Tabs;

class Video extends PureComponent {
	render() {
		const { thevedio, playVideo, videoPlayAddress } = this.props;
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
										? thevedio.map((item) => {
												return (
													<div>
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
								</div>
							</VideoWapper>
						</TabPane>
						<TabPane tab='MV' key='2'>
							Content of Tab Pane 2
						</TabPane>
					</Tabs>
				</VideoMVWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getVideo();
	}
}

export const MapState = (state) => {
	return {
		thevedio: state.getIn(['vediomv', 'videoData', 'data']),
		videoPlayAddress: state.getIn(['vediomv', 'playAddress', 'urls']),
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
	};
};

export default connect(MapState, MapDispatch)(Video);
