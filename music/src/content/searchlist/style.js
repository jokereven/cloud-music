import styled from 'styled-components';

export const SearchListWapper = styled.div`
	flex: 1;
	overflow: auto;
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	.search_title {
		font-size: 12px;
		display: block;
		font-family: Arial, Helvetica, sans-serif;
		color: #999;
		margin-top: 10px;
		padding-left: 12px;
	}
`;

export const SearchListWapperSingle = styled.table`
	flex: 1;
	height: auto;
	width: 100%;
	/* background-color: #096; */
	overflow: auto;
`;

export const SearchListWapperSingleList = styled.div`
	width: 100%;
	height: 32px;
	/* background-color: red; */
	cursor: pointer;
	:hover {
		background-color: rgb(240, 241, 242);
	}
	td {
		height: 32px;
		display: block;
		float: left;
		line-height: 32px;
	}
	td:nth-of-type(1) {
		width: 5%;
	}
	td:nth-of-type(2) {
		width: 30%;
	}
	td:nth-of-type(3) {
		width: 20%;
	}
	td:nth-of-type(4) {
		width: 20%;
	}
	td:nth-of-type(5) {
		width: 20%;
	}
`;
