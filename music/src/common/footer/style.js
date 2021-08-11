import styled from 'styled-components';

export const FooterWapper = styled.div`
	width: 100vw;
	height: 69px;
	position: fixed;
	min-width: 1280px;
	max-width: 1280px;
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
	/* background-color: red; */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	margin-left: 12px;
	border-radius: 3px;
	img {
		width: 100%;
		height: 100%;
	}
	img {
		border-radius: 3px;
	}
`;

export const MusicWapperLeftDes = styled.div`
	width: auto;
	height: 100%;
	/* background-color: red; */
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	margin-left: 72px;
	div {
		width: 100%;
		height: 100%;
		p {
			color: rgb(51, 51, 51);
			display: block;
			padding-top: 12px;
			padding-left: 2px;
		}
		span {
			color: rgb(120, 120, 120);
			font-size: 12px;
			padding-top: 8px;
			/* display: block; */
			padding-left: 2px;
			/* display: inline-block; */
			/* float: left; */
			white-space: nowrap;
			/* background-color: #096; */
		}
	}
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
	/* background-color: #096; */
	width: 300px;
	height: 100%;
	.list {
		line-height: 69px;
		font-size: 24px;
		float: right;
		padding-right: 32px;
	}
`;

export const SongListWapper = styled.div`
	width: 275px;
	height: 350px;
	border: 1px solid #ddd;
	background-color: #fff;
	position: absolute;
	overflow: auto;
	bottom: 69px;
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	div {
		width: 100%;
		height: 32px;
		/* background-color: red; */
		line-height: 32px;
		border-radius: 4px;
		margin-top: 4px;
		cursor: pointer;
		overflow: hidden;
		:hover {
			background-color: rgb(244, 244, 244);
		}
		p {
			float: left;
			color: rgb(46, 46, 46);
			font-size: 13px;
			padding-left: 8px;
		}
		span {
			float: right;
			font-size: 12px;
			padding-right: 4px;
			color: rgb(102, 102, 102);
		}
	}
`;

export const LyricsWapper = styled.div`
	width: 650px;
	height: 145px;
	background-color: rgb(201, 201, 201);
	opacity: 0.618;
	border: 1px solid rgb(62, 62, 62);
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 300px;
	right: 0px;
	margin: auto;
`;
