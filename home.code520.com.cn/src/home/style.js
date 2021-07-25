import styled from 'styled-components';

export const HomeWapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	opacity: 0.95;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	border-radius: 4px;
	box-shadow: 0 0 1px rgb(0, 161, 214, 0.2);
	background-image: url('https://gitee.com/jokereven/PicGo_img/raw/master/PicGo/home.jpg');
	background-repeat: no-repeat;
	background-size: 100vw 100vh;
`;

export const HomeWapperSearch = styled.input`
	position: relative;
	display: block;
	width: 600px;
	height: 49px;
	margin: 49px auto;
	border-radius: 6px;
	background-color: #fff;
	border: 1px #ccc solid;
	padding: 0;
	outline: none;
	box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
	padding-left: 16px;
	box-sizing: border-box;
	font-size: 16px;
`;

export const HomeWapperCollect = styled.div`
	width: 960px;
	height: 400px;
	position: absolute;
	opacity: 0.95;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	margin-top: 22vh;
	box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
	border-radius: 6px;
	border: 1px #ccc solid;
	padding: 4px;
	overflow: auto;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const HomeWapperCollectList = styled.a`
	width: 56px;
	height: 56px;
	border-radius: 50%;
	padding: 4px;
	background-color: rgb(0, 161, 214);
	line-height: 56px;
	text-align: center;
	opacity: 0.8;
	margin: 16px;
	:hover {
		opacity: 1;
		cursor: pointer;
	}
	img {
		width: 35px;
		height: 35px;
		margin: 8px auto;
	}
`;

export const HomeWapperExplain = styled.div`
	position: absolute;
	bottom: 8px;
	right: 4px;
	a {
		width: 72px;
		height: 20px;
		color: #fff;
		font-family: 宋体;
		text-decoration: line-through;
		text-align: center;
		font-size: 14px;
		line-height: 20px;
		display: block;
		background-color: #333333;
	}
	a:hover{
		background-color: #232323;
	}
`;
