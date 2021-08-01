import styled from 'styled-components';

export const SearchListWapper = styled.div`
	flex: 1;
	height: 456px;
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
	height: 375px;
	background-color: #096;
	overflow: auto;
`;

export const SearchListWapperSingleList = styled.tr`
	width: 95%;
	height: 32px;
	background-color: red;
`;

export const SearchListWapperSinger = styled.div`
	flex: 1;
	height: 375px;
	background-color: #648;
	overflow: auto;
`;

export const SearchListWapperPlaylist = styled.div`
	flex: 1;
	height: 375px;
	background-color: #ddd;
	overflow: auto;
`;

export const SearchListWapperAlbum = styled.div`
	flex: 1;
	height: 375px;
	background-color: #317;
	overflow: auto;
`;

export const SearchListWapperFlv = styled.div`
	flex: 1;
	height: 375px;
	background-color: red;
	overflow: auto;
`;
