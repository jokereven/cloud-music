import {
	FieldBinaryOutlined,
	LayoutOutlined,
	PauseCircleOutlined,
	RetweetOutlined,
	StepBackwardOutlined,
	StepForwardOutlined,
	SyncOutlined,
	YoutubeOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	FooterWapper,
	MusicWapper,
	MusicWapperCenter,
	MusicWapperCenterBox,
	MusicWapperLeft,
	MusicWapperRight,
	PlayList,
} from './style';

class Footer extends PureComponent {
	render() {
		const { changeplaytype, count, onplay, play } = this.props;
		return (
			<Fragment>
				<FooterWapper>
					<MusicWapper>
						<MusicWapperLeft></MusicWapperLeft>
						<MusicWapperCenter>
							<MusicWapperCenterBox>
								<PlayList onClick={() => changeplaytype(count)}>
									{count === 0 && (
										<RetweetOutlined className='playtype sequence' />
									)}
									{count === 1 && (
										<SyncOutlined className='playtype circulation' />
									)}
									{count === 2 && (
										<FieldBinaryOutlined className='playtype stochastic' />
									)}
								</PlayList>
								<PlayList>
									<StepBackwardOutlined className='LastSong' />
								</PlayList>
								<PlayList onClick={() => onplay(play)}>
									{play === 0 && <YoutubeOutlined className='PlaySong' />}
									{play === 1 && (
										<PauseCircleOutlined className='PlaySong' />
									)}
								</PlayList>
								<PlayList>
									<StepForwardOutlined className='NextSong' />
								</PlayList>
								<PlayList>
									<LayoutOutlined className='WordSong' />
								</PlayList>
							</MusicWapperCenterBox>
							<audio
								controls
								src='http://music.163.com/song/media/outer/url?id=1864588584.mp3'
							></audio>
						</MusicWapperCenter>
						<MusicWapperRight></MusicWapperRight>
					</MusicWapper>
				</FooterWapper>
			</Fragment>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		count: state.getIn(['playtype', 'playtypecount']),
		play: state.getIn(['playtype', 'playstatuscount']),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		changeplaytype(count) {
			dispatch(actionCreators.playtype(count));
		},
		onplay(playcount) {
				dispatch(actionCreators.changeplay(playcount));
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Footer);
