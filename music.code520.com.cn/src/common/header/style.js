import styled from 'styled-components';
import MusicLogoPic from '../../static/img/网易云.png';

export const HeaderWapper = styled.div`
	width: 100vw;
	height: 69px;
	background-color: rgb(36, 36, 36);
	min-width: 1280px;
	Input {
		width: 175px;
		height: 32px;
		margin-top: 16px;
		outline: none;
		padding: 0px 24px 0px 4px;
	}
`;

export const HeaderWapperLogo = styled.div`
	width: 175px;
	height: 69px;
	float: left;
	position: relative;
	cursor: pointer;
	text-decoration: none;
	div {
		width: 24px;
		height: 24px;
		background-image: url(${MusicLogoPic});
		background-size: contain;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		margin-left: 12px;
	}
	p {
		line-height: 69px;
		font-size: 16px;
		font-family: 宋体;
		color: #fff;
		padding-left: 42px;
		font-weight: 500;
	}
`;

export const HeaderWapperSearch = styled.div`
	margin-left: 45px;
	float: left;
	width: 456px;
	height: 69px;
`;

export const HeaderFireBox = styled.div`
	width: 456px;
	height: 450px;
	background-color: #fff;
	z-index: 999;
	position: relative;
	top: 4px;
	border-radius: 4px;
	display: flex;
	overflow: auto;
	display: none;
	cursor: pointer;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
	&.focused {
		display: block;
	}
	&.searchenter {
		display: block;
	}
	&#onchange {
		display: none;
	}
`;

export const HeaderFireBoxWare = styled.div`
	width: 400px;
	height: 50px;
	margin: 16px auto;
	border-radius: 2px;
	position: relative;
	span {
		line-height: 50px;
		font-family: 宋体;
		font-size: 16px;
	}
	div {
		width: 360px;
		height: 50px;
		position: absolute;
		left: 32px;
		top: 0;
		h3 {
			font-family: 宋体;
			font-size: 16px;
			font-weight: 600;
			padding: 4px;
			float: left;
		}
		.number {
			color: rgb(204, 204, 204);
			float: left;
			padding-top: 4px;
			padding-left: 12px;
			font-size: 12px;
		}
		.content {
			color: rgb(179, 179, 179);
			font-size: 14px;
			float: left;
			position: absolute;
			top: 32px;
		}
	}
`;
