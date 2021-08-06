import styled from 'styled-components';

export const NavWapper = styled.div`
	width: 200px;
	height: auto;
	background-color: #fff;
	float: left;
	overflow: auto;
	border-right: 1px solid #ddd;
	a {
		text-decoration: none;
		:visited {
			color: #000;
		}
		:link {
			color: #000;
		}
	}
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
`;

export const NavWapperList = styled.div`
	border-radius: 4px;
	font-size: 14px;
	font-weight: 400;
	cursor: pointer;
	padding-left: 12px;
	line-height: 35px;
	margin: 12px auto;
	width: 175px;
	height: 35px;
	background-color: #fff;
	margin-top: 4px;
	:hover {
		background-color: rgb(246, 246, 247);
	}
`;

// 我的音乐
export const MyMusicWapper = styled.div`
	width: 150px;
	height: 32px;
	line-height: 32px;
	margin: 0 auto;
	font-size: 12px;
	/* font-family: 宋体; */
`;

// 创建的歌单
export const SongListWapper = styled.details`
	display: block;
	width: 150px;
	height: auto;
	line-height: 32px;
	margin: 0 auto;
	font-size: 12px;
	/* font-family: 宋体; */
`;

export const ILikeMusicWapper = styled.div`
	padding-left: 12px;
	border-radius: 4px;
	font-size: 14px;
	font-weight: 400;
	/* font-family: 宋体; */
	cursor: pointer;
	line-height: 45px;
	margin: 4px auto;
	width: 149px;
	height: 45px;
	background-color: #fff;
	:hover {
		background-color: rgb(246, 246, 247);
	}
`;

// 收藏的歌单
export const CollectionSongListWapper = styled.details`
	width: 150px;
	display: block;
	height: auto;
	line-height: 32px;
	margin: 0 auto;
	font-size: 12px;
	font-family: 宋体;
`;
