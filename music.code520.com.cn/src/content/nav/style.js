import styled from 'styled-components';

export const NavWapper = styled.div`
	width: 200px;
	height: 456px;
	background-color: #fff;
	float: left;
	overflow: auto;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
`;

export const NavWapperList = styled.div`
	padding-left: 12px;
  border-radius: 4px;
	font-size: 16px;
	font-family: 宋体;
	cursor: pointer;
	line-height: 32px;
	margin: 4px auto;
	width: 175px;
	height: 32px;
	background-color: #fff;
	margin-top: 4px;
	:hover {
		background-color: rgb(246, 246, 247);
	}
`;
