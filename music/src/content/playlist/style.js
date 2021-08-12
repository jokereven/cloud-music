import styled from 'styled-components';

export const PlayListWapper = styled.div`
	margin-top: 22px;
	flex: 1;
	height: auto;
	overflow: auto;
	/* background-color: #096; */
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
`;

export const PlayListHeaderWapper = styled.div`
	width: 100%;
	height: auto;
	/* margin-left: 2px; */
	/* background-color: #096; */
	.father {
		width: 100%;
		height: auto;
		/* background-color: #096; */
		float: left;
		display: flex;
		img {
			width: 200px;
			height: 200px;
			border-radius: 6px;
			float: left;
		}
	}
	.right {
		margin-left: 24px;
		flex: 1;
		width: 100%;
		height: auto;
		float: left;
		/* background-color: red; */
		h3 {
			font-size: 20px;
			white-space: nowrap;
		}
		.user {
			width: 100%;
			height: 35px;
			/* background-color: #096; */
			margin-top: 12px;
			img {
				width: 35px;
				height: 35px;
				cursor: pointer;
				border-radius: 2px;
			}
			span {
				font-size: 12px;
				color: #0c73c2;
				line-height: 35px;
				padding-left: 8px;
				cursor: pointer;
			}
			.create {
				margin-left: 15px;
				color: #999;
			}
		}
		.label {
			width: 100%;
			height: 25px;
			/* background-color: #096; */
			margin-top: 25px;
			line-height: 25px;
			span {
				color: #666;
				font-size: 12px;
				float: left;
			}
			p {
				font-size: 12px;
				padding-left: 12px;
				float: left;
			}
		}
		.introduce {
			width: 100%;
			height: auto;
			margin-top: 4px;
			display: block;
			span {
				font-size: 12px;
				float: left;
			}
			.txt {
				width: 456px;
				padding-top: 12px;
				float: left;
				line-height: 24px;
				font-size: 12px;
				color: #666;
				display: block;
			}
		}
	}
	.content {
		width: 100%;
		float: left;
		margin-left: 12px;
		/* background-color: #096; */
	}
`;

export const ListListWapper = styled.div`
	width: 100%;
	height: auto;
	overflow: auto;
	/* background-color: #096; */
	table {
		width: 100%;
		thead {
			width: 100%;
			height: 24px;
			/* background-color: red; */
			line-height: 24px;
			tr {
				width: 100%;
			}
			td:nth-of-type(1) {
				width: 40%;
			}
			td:nth-of-type(2) {
				width: 30%;
			}
			td:nth-of-type(3) {
				width: 30%;
			}
		}
		tbody {
			width: 100%;
			height: auto;
			tr {
				width: 100%;
				height: 32px;
				font-size: 12px;
				color: #333;
				line-height: 32px;
				cursor: pointer;
				/* background-color: #096; */
				:hover {
					background-color: rgb(240, 241, 242);
				}
			}
		}
	}
`;

export const SongCollectionWapper = styled.div`
	margin-top: 0px;
	height: auto;
	flex: 1;
	/* background-color: #096; */
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	display: grid;
	/*  声明了三列，宽度分别为 200px 100px 200px */
	grid-template-columns: 456px 456px;
	grid-gap: 5px;
	/*  声明了两行，行高分别为 50px 50px  */
	grid-template-rows: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
`;

export const SongListbyList = styled.div`
	/* background-color: #096; */
	overflow: hidden;
	cursor: pointer;
	img {
		width: 80px;
		height: 80px;
		border: 1px solid rgb(250, 248, 248);
		float: left;
	}
	span {
		line-height: 45px;
		font-size: 14px;
		padding-left: 4px;
		color: rgb(55, 55, 55);
	}
	p {
		white-space: nowrap;
		line-height: 25px;
		color: rgb(55, 55, 55);
		padding-left: 4px;
		font-size: 12px;
		// 溢出显示省略号
		text-overflow: ellipsis;
		// 溢出的部分隐藏
		overflow: hidden;
	}
`;

export const LatestComment = styled.div`
	width: 100%;
	height: auto;
	overflow: auto;
	/* background-color: #096; */
	textarea {
		outline: none;
		border: 1px solid rgb(229, 229, 229);
		width: 800px;
		height: 100px;
		resize: none;
		float: left;
	}
	button {
		margin-left: 2px;
		float: left;
		margin-top: 72px;
		background-color: #fff;
		border: 1px solid rgb(226, 226, 226);
		cursor: pointer;
		width: 75px;
		:hover {
			background-color: rgb(242, 242, 242);
		}
	}
	#comment {
		width: 100%;
		height: auto;
		/* background-color: #096; */
		float: left;
		margin-top: 24px;
		h2 {
			font-size: 16px;
			font-weight: 600;
			padding: 8px;
		}
		.box {
			/* background-color: #096; */
			width: 100%;
			margin-top: 4px;
			height: auto;
			float: left;
			img {
				width: 45px;
				/* height: 45px; */
				float: left;
				cursor: pointer;
			}
			p {
				width: auto;
				height: 45px;
				float: left;
				color: #0c73c2;
				font-size: 12px;
				padding-left: 6px;
				cursor: pointer;
			}
			span {
				float: left;
				padding-left: 2px;
				font-size: 12px;
			}
			.time {
				float: left;
				padding-left: 4px;
				font-size: 12px;
			}
		}
		.backMessage {
			width: 100%;
			height: auto;
			background-color: rgb(244, 244, 244);
			float: left;
			span {
				float: left;
				color: #0c73c2;
				font-size: 12px;
			}
			p {
				float: left;
				padding-left: 8px;
				font-size: 12px;
			}
		}
	}
`;
