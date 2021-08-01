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
	border-bottom: 3.14px solid rgb(165, 29, 29);
`;

export const HeaderWapperLogo = styled.a.attrs({
	href: '/individuation',
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
	width: 375px;
	height: 450px;
	background-color: #fff;
	z-index: 999;
	position: absolute;
	top: 72px;
	border-radius: 4px;
	display: flex;
	overflow: auto;
	display: none;
	cursor: pointer;
	border: 1px solid #ddd;
	box-shadow: 0 0 1px #ddd;
	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
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
	width: 360px;
	height: 50px;
	margin: 16px auto;
	border-radius: 2px;
	position: relative;
	span {
		padding-left: 4px;
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
			padding-top: 6px;
			padding-left: 12px;
			font-size: 8px;
		}
		.content {
			color: rgb(179, 179, 179);
			font-size: 12px;
			float: left;
			position: absolute;
			top: 32px;
		}
	}
`;

export const HeaderSearchBox = styled.div`
	width: 375px;
	height: 380px;
	background-color: #fff;
	box-sizing: border-box;
	z-index: 999;
	position: absolute;
	top: 72px;
	border-radius: 4px;
	overflow: auto;
	display: none;
	cursor: pointer;
	border: 1px solid #ddd;
	box-shadow: 0 0 1px #ddd;
	&#onchange {
		display: block;
	}
	&.focused {
		display: block;
	}
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	span {
		box-sizing: border-box;
		display: block;
		font-size: 13px;
		margin-top: 4px;
		margin-left: 8px;
		font-family: Arial, Helvetica, sans-serif;
		color: #666;
		:hover {
			color: #333;
		}
	}
`;

export const HeaderSearchBoxWare = styled.div`
	width: 360px;
	height: 350px;
	margin: 4px auto;
	background-color: #fff;
	#songs {
		width: 64px;
		height: 32px;
	}
	.songs {
		font-size: 12px;
		font-size: 宋体;
		font-weight: 500;
		line-height: 32px;
		padding-left: 4px;
		float: left;
		color: rgb(177, 177, 177);
	}
	.songs_box {
		width: 100%;
		height: auto;
		padding-left: 0px;
		margin-top: 4px;
		border-top: 1px solid #ddd;
	}
	.songer_box {
		width: 100%;
		height: auto;
		padding-left: 0px;
		margin-top: 4px;
		border-top: 1px solid #ddd;
	}
	#songs_box {
		display: block;
		position: relative;
		width: 345px;
		height: auto;
		margin-top: 8px;
		font-family: 宋体;
	}
	.albums {
		display: block;
		position: relative;
		width: 345px;
		height: auto;
		margin-top: 8px;
		border-top: 1px solid #ddd;
	}
	.songs_songer {
		font-size: 12px;
		color: rgb(12, 115, 194);
	}
	.songs_name {
		font-size: 12px;
		color: #333;
	}
	#songer {
		display: block;
		width: 64px;
		height: 32px;
		margin-top: 12px;
		background-color: #fff;
	}
	#albums {
		display: block;
		width: 64px;
		height: 32px;
		margin-top: 12px;
		background-color: #fff;
	}
	.songer_name {
		font-size: 12px;
		font-family: 宋体;
		color: rgb(12, 115, 194);
		padding-left: 8px;
		padding-top: 4px;
	}
	.albums_name {
		font-size: 13px;
		color: rgb(12, 115, 194);
		font-weight: 500;
		padding-top: 4px;
	}
`;

export const HeaderCenter = styled.div`
	width: 256px;
	font-size: 12px;
	line-height: 69px;
	font-family: 宋体;
	text-align: center;
	height: 69px;
	float: right;
	color:#fff;
	margin-right: 12px;
`;

export const HeaderLoginWapper = styled.div`
	width: 175px;
	height: 69px;
	float: right;
	background-color: #232323;
	display: flex;
	justify-content: space-between;
	margin-right: 32px;
	align-items: center;
	.son {
		border-radius: 50%;
		cursor: pointer;
	}
`;

export const LoginWapperWarp = styled.div`
	width: 32px;
	height: 32px;
`;

export const LoginWapperGitee = styled.div`
	width: 32px;
	height: 32px;
`;

export const LoginWapperGithub = styled.div`
	width: 32px;
	height: 32px;
`;
