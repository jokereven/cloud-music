import styled from 'styled-components';

export const PrimaryWapper = styled.div`
	z-index: 999;
	width: 456px;
	height: 256px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	border-radius: 2px;
	box-shadow: 0 0 1px rgb(194, 12, 12);
	overflow: hidden;
	box-sizing: border-box;
	display: grid;
	/*  声明了三列，宽度分别为 150px 150px 150px */
	grid-template-columns: 150px 150px 150px;
	grid-gap: 5px;
	/*  声明了两行，行高分别为 82px 82px 82px */
	grid-template-rows: 82px 82px 82px;
`;

export const PrimaryWapperList = styled.div`
	background-color: rgb(194, 12, 12);
	opacity: 0.95;
	cursor: pointer;
	:hover {
		opacity: 1;
	}
	a {
		width: 100%;
		height: 100%;
		display: block;
		color: #eee;
		font-weight: 500;
		font-size: 12px;
		line-height: 72px;
		text-decoration: underline;
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		:hover {
			color: #fff;
		}
	}
`;

export const PrimaryWapperBack = styled.div`
	width: 960px;
	height: 345px;
	background-color: #096;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	background: url('https://tse3-mm.cn.bing.net/th/id/OIP-C.U8rYfpRJjX0K4XXheu_KcgHaF5?pid=ImgDet&rs=1');
	background-size: 245.5px 145.5px;
	P{
		position: fixed;
		bottom: 14px;
		right: 16px;
		font-size: 12px;
		font-family: Arial, Helvetica, sans-serif;
		color: #333;
		font-weight: 800;
		cursor: pointer;
		text-decoration: underline;
	}
`;
