import styled from 'styled-components';

export const SearchListWapper = styled.div`
	flex: 1;
	height: 456px;
	overflow: auto;
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
	.search_title {
		font-size: 12px;
		display: block;
		font-family: 宋体;
		margin-top: 10px;
		padding-left: 12px;
	}
`;

export const SearchListWapperSingle = styled.div`
	flex: 1;
	height: 375px;
	background-color: #096;
	overflow: auto;
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
