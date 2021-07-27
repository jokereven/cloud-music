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

export const HeaderWapperLogo = styled.a.attrs({
	href: '/',
})`
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
	width: 300px;
	height: 375px;
	background-color: #096;
	border: 1px solid #fff;
	box-sizing: 0 0 1px #fff;
	z-index: 999;
	position: relative;
	top: 4px;
	border-radius: 4px;
	display: flex;
	overflow: auto;
	display: none;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
	&.focused{
		display: block;
	}
`;
