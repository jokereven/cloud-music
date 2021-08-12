import {
	BarsOutlined,
	CloseOutlined,
	FieldBinaryOutlined,
	HeartOutlined,
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
	LyricsWapper,
	MusicWapper,
	MusicWapperCenter,
	MusicWapperCenterBox,
	MusicWapperLeft,
	MusicWapperLeftDes,
	MusicWapperLeftPic,
	MusicWapperRight,
	PlayList,
	SongListWapper,
} from './style';

class Footer extends PureComponent {
	render() {
		const {
			changeplaytype,
			count,
			onplay,
			play,
			bannermusicid,
			onplaymusic,
			getASing,
			Lyricstypecount,
			changeLyricsType,
			// Lyrics,
			chengesongListtype,
			songListcount,
			songlist,
			addmusic,
			playOneSOne,
			playi,
			playOne,
		} = this.props;
		let list = localStorage.getItem('musiclist');
		return (
			<Fragment>
				<FooterWapper>
					<MusicWapper>
						<MusicWapperLeft>
							<MusicWapperLeftPic>
								{onplaymusic
									? onplaymusic.map((item, index) => {
											return (
												<img
													alt='code520'
													src={item.getIn(['al', 'picUrl'])}
													key={index}
												></img>
											);
									  })
									: ''}
							</MusicWapperLeftPic>
							<MusicWapperLeftDes>
								{onplaymusic
									? onplaymusic.map((item, index) => {
											return (
												<div key={index}>
													<p key={index}>
														{item.get('name')}
														<HeartOutlined />
													</p>
													{item.get('ar').map((val, index) => {
														return (
															<span key={index + 1}>{val.get('name')}</span>
														);
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
									<StepBackwardOutlined
										className='LastSong'
										onClick={() => playOne(playi, this.audio, count)}
									/>
								</PlayList>
								<PlayList onClick={() => onplay(play, this.audio)}>
									{play === 0 && <YoutubeOutlined className='PlaySong' />}
									{play === 1 && <PauseCircleOutlined className='PlaySong' />}
								</PlayList>
								<PlayList>
									<StepForwardOutlined
										className='NextSong'
										onClick={() => playOneSOne(playi, this.audio, count)}
									/>
								</PlayList>
								<PlayList>
									<LayoutOutlined
										className='WordSong'
										onClick={() => getASing(this.audio, Lyricstypecount)}
									/>
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
						<MusicWapperRight>
							{songListcount
								? songListcount === 1 && (
										<SongListWapper>
											{songlist
												? songlist.map((item, index) => {
														return (
															<div
																key={index}
																onClick={() => addmusic(item.get('id'))}
															>
																<p>{item.get('name')}</p>
																{item.get('ar').map((val, index) => {
																	return (
																		<span key={index}>{val.get('name')}</span>
																	);
																})}
															</div>
														);
												  })
												: ''}
										</SongListWapper>
								  )
								: ''}
							<BarsOutlined
								className='list'
								onClick={() => chengesongListtype(songListcount)}
							/>
						</MusicWapperRight>
						{Lyricstypecount === 1 && (
							<LyricsWapper>
								{/* {Lyrics ? Lyrics: ''} */}
								<CloseOutlined
									onClick={changeLyricsType}
									style={{
										position: 'absolute',
										top: '0',
										right: '0',
										padding: '4px',
										color: '#fff',
									}}
								/>
							</LyricsWapper>
						)}
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
		Lyricstypecount: state.getIn(['playtype', 'Lyricstypecount']),
		// Lyrics: state.getIn(['playtype', 'onplaymusiclyrics', 'lrc', 'lyric']),
		songListcount: state.getIn(['playtype', 'songListcount']),
		songlist: state.getIn(['playtype', 'songList', 'songs']),
		playi: state.getIn(['playtype', 'playonesonecount']),
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
		getASing(audioElem, Lyricstypecount) {
			// 可以播放
			// console.log("ok");
			if (audioElem.src.split(',').length === 1) {
				if (audioElem.src !== `${window.location.href}`) {
					// console.log(window.location.href);
					const musicid = audioElem.src.split('=')[1].split('.')[0];
					// console.log(musicid);
					dispatch(actionCreators.LyricsStatus(Lyricstypecount));
					// console.log(musicid);
				}
			}
		},
		changeLyricsType() {
			dispatch(actionCreators.ChangeLyricsType());
		},
		chengesongListtype(songListcount) {
			if (songListcount === 1) {
				dispatch(actionCreators.showTheSongList());
				dispatch(actionCreators.SongListData());
			}
			dispatch(actionCreators.ChengesongListtype(songListcount));
		},
		addmusic(musicid) {
			dispatch(actionCreators.AddMusic(musicid));
			dispatch(actionCreators.BannerMusicPlay());
		},
		playOneSOne(playi, audioElem, count) {
			dispatch(actionCreators.PlayOneSOne(playi));
			// console.log(audioElem.src);
			if (count === 0) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[playi]
				}.mp3`;
			}
			if (count === 2) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[
						parseInt(
							Math.random() *
								(localStorage.getItem('playlist').split(',').length - 1)
						)
					]
				}.mp3`;
			}
			if (count === 1) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[playi]
				}.mp3`;
				audioElem.loop = true;
			} else {
				audioElem.loop = false;
			}
		},
		playOne(playi, audioElem, count) {
			dispatch(actionCreators.PlayOne(playi));
			if (count === 0) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[playi]
				}.mp3`;
			}
			if (count === 2) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[
						parseInt(
							Math.random() *
								(localStorage.getItem('playlist').split(',').length)
						)
					]
				}.mp3`;
			}
			if (count === 1) {
				audioElem.src = `http://music.163.com/song/media/outer/url?id=${
					localStorage.getItem('playlist').split(',')[playi]
				}.mp3`;
				audioElem.loop = true;
			} else {
				audioElem.loop = false;
			}
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Footer);
