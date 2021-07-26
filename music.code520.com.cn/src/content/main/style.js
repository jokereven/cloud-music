import styled from 'styled-components';

export const MainFindWapper = styled.div`
	flex: 1;
	background-color: #fff;
	float: left;
	height: 456px;
	overflow: auto;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
`;

export const MainFindWapperNav = styled.div`
	width: 456px;
	height: 64px;
  display: flex;
  justify-content: space-around;
`;

export const MainFindWapperNavList = styled.div`
	width: 72px;
	text-align: center;
	line-height: 32px;
	height: 32px;
	margin-top: 12px;
	cursor: pointer;
	font-size: 16px;
	font-family: 宋体;
	font-weight: 600;
	border-bottom: 3.14px solid rgb(236, 65, 65);
`;
