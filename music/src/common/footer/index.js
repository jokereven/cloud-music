import {
	FieldBinaryOutlined,
	LayoutOutlined,
	PauseCircleOutlined,
	RetweetOutlined,
	StepBackwardOutlined,
	StepForwardOutlined,
	SyncOutlined,
	YoutubeOutlined,
	HeartOutlined
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
	MusicWapperLeftDes,
	MusicWapperLeftPic,
	MusicWapperRight,
	PlayList
} from './style';

class Footer extends PureComponent {
	render() {
		const { changeplaytype, count, onplay, play, bannermusicid, onplaymusic } =
			this.props;
		let list = localStorage.getItem('musiclist');
		return (
			<Fragment>
				<FooterWapper>
					<MusicWapper>
						<MusicWapperLeft>
							<MusicWapperLeftPic>
								{onplaymusic
									? onplaymusic.map((item,index) => {
											return <img src={item.getIn(['al', 'picUrl'])} key={index}></img>;
									  })
									: ''}
							</MusicWapperLeftPic>
							<MusicWapperLeftDes>
								{onplaymusic
									? onplaymusic.map((item,index) => {
											return (
												<div key={index}>
													<p key={index}>
														{item.get('name')}
														<HeartOutlined />
													</p>
													{item.get('ar').map((val,index) => {
														return <span key={index+1}>{val.get('name')}</span>;
													})}
												</div>
											);
									  })
									: ''}
							</MusicWapperLeftDes>
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
								src={
									list
										? `http://music.163.com/song/media/outer/url?id=${
												bannermusicid[bannermusicid.length - 1]
										  }.mp3`
										: ''
								}
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
			const TheAudio = this.audio;
			TheAudio.addEventListener('canplay', function () {
				// 可以播放
				TheAudio.play();
			});
			// console.log(TheAudio);
			this.props.audioPicshow(TheAudio);
			// this.audio.play();
		}
	}
	componentDidMount() {
		// console.log('播放历史');
		// console.log(localStorage.getItem('musiclist'));
		this.props.SetMusicList(localStorage.getItem('musiclist'));
	}
}

const MapStateToProps = (state) => {
	return {
		count: state.getIn(['playtype', 'playtypecount']),
		play: state.getIn(['playtype', 'playstatuscount']),
		bannermusicid: state.getIn(['playtype', 'MusicList']),
		onplaymusic: state.getIn(['playtype', 'onplaymusic', 'songs']),
	};
};

const MapDispatchToProps = (dispatch) => {
	return {
		changeplaytype(count) {
			dispatch(actionCreators.playtype(count));
		},
		onplay(playcount, audioElem) {
			if (playcount === 0) {
				if (audioElem.src !== `${window.location.href}`) {
					// console.log(audioElem.src.split('=')[1].split('.')[0]);
					if (audioElem.src.split('=')[1].split('.')[0] === 'undefined') {
						console.log('不可以播放没有music的id');
					} else {
						audioElem.play().catch(() => {
							console.log('audio play error');
							//  when an exception is played, the exception flow is followed
						});
					}
				}
			}
			if (playcount === 1) {
				audioElem.pause();
			}
			// console.log(playcount);
			// console.log(audioElem);
			dispatch(actionCreators.changeplay(playcount));
		},
		audioPicshow(audioElem) {
			audioElem.addEventListener('canplay', function () {
				// 可以播放
				// console.log("ok");
				if (audioElem.src !== `${window.location.href}`) {
					// console.log(window.location.href);
					const musicid = audioElem.src.split('=')[1].split('.')[0];
					// console.log(musicid);
					dispatch(actionCreators.ShowMusicPic(musicid));
				}
			});
		},
		SetMusicList(MusicList) {
			if (MusicList !== null) {
				dispatch(actionCreators.SetMusicList(MusicList));
			}
			// console.log(MusicList);
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Footer);
