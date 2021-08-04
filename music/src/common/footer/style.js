import styled from 'styled-components';

export const FooterWapper = styled.div`
	width: 100vw;
	height: 69px;
	position: fixed;
	bottom: 0;
	background-color: rgb(255, 255, 255);
	border-top: 1px solid #ddd;
`;

export const MusicWapper = styled.div`
	width: 1280px;
	height: 100%;
	background-color: rgb(255, 255, 255);
	margin: 0px auto;
	display: flex;
	justify-content: space-between;
`;

export const MusicWapperLeft = styled.div`
	width: 256px;
	height: 100%;
	/* background-color: #096; */
	position: relative;
`;

export const MusicWapperLeftPic = styled.div`
	width: 49px;
	height: 49px;
	background-color: red;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	margin-left: 12px;
`;

export const MusicWapperLeftDes = styled.div`
	width: 149px;
	height: 49px;
	background-color: red;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	margin-right: 24px;
`;

export const MusicWapperCenter = styled.div`
	width: 500px;
	height: 100%;
	//播放按钮
	audio {
		outline: none;
		width: 500px;
		height: 36%;
		color: rgb(73, 73, 76);
		margin-top: -4px;
		//播放按钮
		::-webkit-media-controls-play-button {
			display: none;
		}
		//所有控件
		::-webkit-media-controls-enclosure {
			background-color: rgb(255, 255, 255);
		}
		//观看的当前时间
		::-webkit-media-controls-current-time-display {
			color: rgb(12, 12, 12);
			font-size: 12px;
			font-family: 宋体;
		}
		//剩余时间
		::-webkit-media-controls-time-remaining-display {
			color: rgb(12, 12, 12);
			font-size: 12px;
			font-family: 宋体;
		}
		//进度条
		::-webkit-media-controls-timeline {
		}
		//音量按钮
		::-webkit-media-controls-mute-button {
			/* display: none; */
		}
		::-webkit-media-controls-toggle-closed-captions-button {
			/* display: none; */
		}
		//音量的控制条
		::-webkit-media-controls-volume-slider {
			width: 80px;
		}
	}
`;

export const MusicWapperCenterBox = styled.div`
	width: 360px;
	height: 45px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const PlayList = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	.playtype,
	.WordSong,
	.LastSong,
	.NextSong,
	.PlaySong {
		width: 20px;
		height: 20px;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		cursor: pointer;
	}
`;

export const MusicWapperRight = styled.div`
	background-color: #096;
	width: 300px;
	height: 100%;
`;
