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
	}
`;
