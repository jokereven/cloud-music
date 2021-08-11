import styled from 'styled-components';

export const MainFindWapper = styled.div`
	flex: 1;
	height: auto;
	overflow: auto;
	/* background-color: #096; */
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	.carousel {
		border-radius: 4px;
		width: 456px;
		height: 175px;
		margin: 2px auto;
		div {
			width: 100%;
			height: 100%;
			border-radius: 4px;
			cursor: pointer;
		}
		img {
			width: 100%;
			height: 100%;
			border-radius: 4px;
		}
	}
`;

// 推荐
export const RecommendWapper = styled.div`
	flex: 1;
	/* background-color: #096; */
	/* height: auto; */
	/* overflow: auto; */
	margin-top: -8px;
	margin-bottom: 45px;
`;

export const AddASongListWapper = styled.div`
	width: auto;
	height: auto;
	margin-top: 60px;
	/* background-color: #096; */
	display: block;
`;

export const AddTitle = styled.a.attrs({
	href: 'song-list',
})`
	height: 32px;
	color: rgb(55, 55, 55);
	display: block;
	line-height: 32px;
	padding-left: 4px;
	/* background-color: red; */
	font-size: 20px;
	font-weight: 600;
	:hover {
		color: rgb(0, 0, 0);
	}
`;

export const RecommendListWapper = styled.div`
	width: auto;
	height: auto;
	border-radius: 2px;
	/* background-color: #096; */
	display: grid;
	margin-bottom: 32px;
	/*  声明了三列，宽度分别为 200px 100px 200px */
	grid-template-columns: 175px 175px 175px 175px 175px;
	grid-gap: 25px;
	/*  声明了两行，行高分别为 50px 50px  */
	grid-template-rows: 175px 175px;
`;

export const RecommendList = styled.div`
	/* background-color: red; */
	border-radius: 4px;
	margin: 4px;
	img {
		width: 175px;
		height: 175px;
		cursor: pointer;
		border-radius: 4px;
	}
	p {
		font-size: 12px;
		font-family: 宋体;
	}
	.redommend-box {
		/* background-color: #096; */
	}
`;

export const ExclusiveWapper = styled.div`
	width: 960px;
	height: auto;
	margin-top: 60px;
	/* background-color: #096; */
`;

export const ExclusiveTitle = styled.a.attrs({
	href: '/exclusive-delivery',
})`
	height: 32px;
	color: rgb(55, 55, 55);
	display: block;
	line-height: 32px;
	padding-left: 4px;
	/* background-color: red; */
	font-size: 20px;
	font-weight: 600;
	:hover {
		color: #000;
	}
`;

export const ExclusiveListWapper = styled.div`
	width: auto;
	height: auto;
	/* background-color: #096; */
	display: flex;
	justify-content: space-between;
`;

export const ExclusiveList = styled.div`
	width: 33%;
	height: 175px;
	/* background-color: red; */
	margin-left: 8px;
	border-radius: 6px;
	cursor: pointer;
	img {
		width: 100%;
		height: 175px;
		border-radius: 6px;
	}
`;

export const UpToDateWapper = styled.div`
	width: auto;
	height: auto;
	/* background-color: #096; */
	margin-top: 72px;
`;

export const UpToDateTitle = styled.a.attrs({
	href: '/latest-music',
})`
	height: 32px;
	color: rgb(55, 55, 55);
	/* display: block; */
	line-height: 32px;
	padding-left: 4px;
	/* background-color: red; */
	font-size: 20px;
	font-weight: 600;
	:hover {
		color: #000;
	}
`;

export const UpToDateBox = styled.div`
	width: auto;
	height: 256px;
	border-radius: 4px;
	/* background-color: #096; */
	display: grid;
	/*  声明了三列，宽度分别为 200px 100px 200px */
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 5px;
	/*  声明了两行，行高分别为 50px 50px  */
	grid-template-rows: 49px 49px 49px 49px;
`;

export const UpToDateList = styled.div`
	background-color: #fff;
	border-radius: 4px;
	position: relative;
	float: left;
	cursor: pointer;
	overflow: hidden;
	box-sizing: border-box;
	:hover {
		background-color: rgb(234, 234, 234);
	}
	img {
		width: 49px;
		height: 49px;
		border-radius: 4px;
		position: absolute;
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		float: left;
		margin-left: 4px;
	}
	.uptodatename {
		float: right;
		width: 235px;
		height: 100%;
		margin-right: 49px;
		border-radius: 4px;
		display: block;
		/* background-color: #096; */
		p {
			font-size: 14px;
			color: #232323;
		}
		span {
			line-height: 32px;
			color: rgb(159, 159, 203);
			font-size: 12px;
		}
	}
`;

export const RecommendedMvWapper = styled.div`
	width: auto;
	height: auto;
	/* background-color: #096; */
	/* margin-top: 12px; */
`;

export const RecommendedMvTitle = styled.a.attrs({
	href: '/latest-mv',
})`
	height: 32px;
	color: rgb(55, 55, 55);
	/* display: block; */
	line-height: 32px;
	padding-left: 4px;
	/* background-color: red; */
	font-size: 20px;
	font-weight: 600;
	:hover {
		color: #000;
	}
`;

export const RecommendedMvBox = styled.div`
	width: auto;
	height: auto;
	overflow: hidden;
	/* background-color: red; */
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
`;

export const RecommendedMvList = styled.div`
	width: 300px;
	height: auto;
	border-radius: 6px;
	margin-right: 32px;
	cursor: pointer;
	/* background-color: #096; */
	img {
		width: 317px;
		height: 175px;
		border-radius: 6px;
	}
	p {
		font-size: 14px;
	}
	span {
		color: rgb(103, 103, 159);
		font-size: 12px;
	}
`;

export const CodeMusicWapper = styled.div`
	width: auto;
	height: auto;
	/* background-color:red; */
	padding-left: 45px;
	font-size: 13x;
	font-family: 宋体;
	/* color:#096; */
	padding-top: 12px;
`;

export const SongListWapper = styled.div`
	/* background-color: red; */
	margin-bottom: 12px;
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	height: auto;
	overflow: auto;
	.recommend {
		width: 100%;
		height: auto;
		/* background-color: #096; */
		display: grid;
		grid-template-columns: 175px 175px 175px 175px 175px;
		grid-gap: 22px;
		/*  声明了两行，行高分别为 50px 50px  */
		grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
		.father {
			/* background-color: #096; */
			cursor: pointer;
			border-radius: 3px;
			img {
				width: 175px;
				height: 175px;
				border-radius: 3px;
			}
			p {
				color: rgb(55, 55, 55);
			}
		}
	}
`;

export const SongListHeader = styled.div`
	width: 100%;
	height: 75px;
	background-color: #fff;
	border-bottom: 3.14px solid rgb(194, 12, 12);
	position: relative;
	h2 {
		font-size: 26px;
		line-height: 75px;
		font-family: 宋体;
		float: left;
	}
	.type {
		width: 520px;
		height: 32px;
		/* background-color: #096; */
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: -16px;
		left: 0px;
		margin: auto;
		margin-right: 45px;
		line-height: 32px;
		display: flex;
		justify-content: space-between;
		span {
			color: rgb(55, 55, 55);
			font-size: 12px;
			cursor: pointer;
			:hover {
				color: rgb(55, 55, 127);
			}
		}
	}
`;
