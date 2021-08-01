import styled from 'styled-components';

export const FooterWapper = styled.div`
	width: 100vw;
	height: 49px;
	position: fixed;
	bottom: 0;
	background-color: rgb(255, 255, 255);
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
	/* background-color: red; */
`;

export const MusicWapperCenter = styled.div`
	width: 600px;
	height: 100%;
	//播放按钮
	audio {
		width: 600px;
		height: 36%;
		line-height: 49px;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		color: rgb(73, 73, 76);
		margin-bottom: 12px;
		::-webkit-media-controls-play-button {
			display: none;
		}
		::-webkit-media-controls-enclosure {
			background-color: rgb(255, 255, 255);
		}
	}
`;

export const MusicWapperRight = styled.div`
	width: 256px;
	height: 100%;
	/* background-color: red; */
`;
