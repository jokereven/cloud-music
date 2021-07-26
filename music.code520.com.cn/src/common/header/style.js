import styled from 'styled-components';
import MusicLogoPic from '../../static/img/网易云.png';

export const HeaderWapper = styled.div`
	width: 100vw;
	height: 69px;
	background-color: rgb(36, 36, 36);
	min-width: 1280px;
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
