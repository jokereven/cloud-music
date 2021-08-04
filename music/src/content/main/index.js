import { Carousel, Tabs } from 'antd';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators as FooteractionCreators } from '../../common/footer/store';
import { actionCreators } from './store';
import { MainFindWapper, RecommendWapper } from './style';

const contentStyle = {
	height: '100%',
};
const { TabPane } = Tabs;

class Main extends PureComponent {
	render() {
		const { bannerpic, addmusic } = this.props;
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
	}
}

export const MapStateToProps = (state) => {
	return {
		bannerpic: state.getIn(['bannerlist', 'bannerlist', 'banners']),
	};
};

export const MapDispatchToProps = (dispatch) => {
	return {
		disbanner() {
			dispatch(actionCreators.Disbanner());
		},
		addmusic(targetid) {
			dispatch(FooteractionCreators.BannerMusicPlay());
			dispatch(FooteractionCreators.AddMusic(targetid));
		},
	};
};
export default connect(MapStateToProps, MapDispatchToProps)(Main);
