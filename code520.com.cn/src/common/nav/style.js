import styled from 'styled-components';
import WapperWarpLogo from '../../static/img/code520-logo.png';

export const NavWapper = styled.div`
	width: 100vw;
	margin: 0 auto;
	height: 69px;
	background: #242424;
`;

export const NavWapperWarp = styled.div`
	overflow: hidden;
	width: 85%;
	height: 100%;
	background: #333;
	margin: 0 auto;
	Input {
		float: left;
		width: 160px;
		height: 32px;
		border-radius: 16px;
		outline: none;
		border: none;
		margin-top: 18.5px;
	}
	div a {
		color: #787878;
		text-decoration: none;
		line-height: 69px;
		padding-left: 16px;
	}
`;

export const NavWapperWarpLogoWapper = styled.div`
	float: left;
	position: relative;
	width: 175px;
	height: 100%;
	background: #333;
	cursor: pointer;
	:hover {
		background-color: #242424;
	}
	h1 {
		position: absolute;
		line-height: 69px;
		color: #fff;
		float: left;
		padding-left: 60px;
		font-family: 宋体;
		font-size: 16px;
	}
`;

export const NavWapperWarpLogo = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	float: left;
	margin-left: 16px;
	width: 36px;
	height: 36px;
	background-image: url(${WapperWarpLogo});
	background-repeat: no-repeat;
	background-size: 36px 36px;
	border: 1px solid #333;
	border-radius: 4px;
	background-color: #fff;
`;

export const NavWapperWarpListWapper = styled.div`
	width: 60%;
	height: 69px;
	position: relative;
	float: left;
	display: block;
	background-color: #333;
	display: flex;
	a {
		width: 15%;
		height: 100%;
	}
`;

export const NavWapperWarpList = styled.div`
	:hover {
		background: #242424;
	}
	background: #333;
	text-align: center;
	width: 100%;
	height: 100%;
	font: normal 300 14px/69px 宋体;
	color: #ffffff;
	cursor: pointer;
`;
