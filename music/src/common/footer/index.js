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
	MusicWapperLeftPic,
	MusicWapperRight,
	PlayList,
} from './style';

class Footer extends PureComponent {
	render() {
		const { changeplaytype, count, onplay, play, bannermusicid } = this.props;
		return (
			<Fragment>
				<FooterWapper>
					<MusicWapper>
						<MusicWapperLeft>
							<MusicWapperLeftPic></MusicWapperLeftPic>
						</MusicWapperLeft>
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
								<PlayList onClick={() => onplay(play, this.audio)}>
									{play === 0 && <YoutubeOutlined className='PlaySong' />}
									{play === 1 && <PauseCircleOutlined className='PlaySong' />}
								</PlayList>
								<PlayList>
									<StepForwardOutlined className='NextSong' />
								</PlayList>
								<PlayList>
									<LayoutOutlined className='WordSong' />
								</PlayList>
							</MusicWapperCenterBox>
							<audio
								ref={(audio) => {
									this.audio = audio;
								}}
								controls
								src={`http://music.163.com/song/media/outer/url?id=${
									bannermusicid[bannermusicid.length - 1]
								}.mp3`}
							></audio>
						</MusicWapperCenter>
						<MusicWapperRight></MusicWapperRight>
					</MusicWapper>
				</FooterWapper>
			</Fragment>
		);
	}
	componentDidUpdate() {
		if (this.props.play === 1) {
			this.audio.play();
		}
	}
}

const MapStateToProps = (state) => {
	return {
		count: state.getIn(['playtype', 'playtypecount']),
		play: state.getIn(['playtype', 'playstatuscount']),
		bannermusicid: state.getIn(['playtype', 'MusicList']),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		changeplaytype(count) {
			dispatch(actionCreators.playtype(count));
		},
		onplay(playcount, audioElem) {
			if (playcount === 0) {
				audioElem.play().catch(() => {
					console.log('error');
					//  when an exception is played, the exception flow is followed
				});
			}
			if (playcount === 1) {
				audioElem.pause();
			}
			// console.log(playcount);
			// console.log(audioElem);
			dispatch(actionCreators.changeplay(playcount));
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Footer);
