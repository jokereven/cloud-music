import styled from 'styled-components';

export const CodeWapper = styled.div`
	display: grid;
	/*  声明了四列，宽度分别为 210px 210px 210px */
	grid-template-columns: 210px 210px 210px 210px;
	grid-gap: 5px;
	/*  声明了两行，行高分别为 50px 50px  */
	grid-template-rows: 110px 110px 110px 110px;
	box-sizing: border-box;
	width: 860px;
	height: 460px;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	border-radius: 6px;
	border: 1px solid rgb(204, 204, 204);
	box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
`;

export const CodeWapperList = styled.div`
	width: 210px;
	height: 110px;
	box-shadow: rgb(0 0 0 / 30%) 0px 2px 4px;
	border-radius: 6px;
	border: 1px solid rgb(204, 204, 204);
	float: left;
	background-image: url('https://tse2-mm.cn.bing.net/th/id/OIP-C.U8rYfpRJjX0K4XXheu_KcgHaF5?w=209&h=180&c=7&o=5&dpr=1.5&pid=1.7');
	background-repeat: no-repeat;
	background-size: 210px 110px;
	opacity: 0.95;
`;
