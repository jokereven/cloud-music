import styled from 'styled-components';

export const RecentlyPlayedWapper = styled.div`
	flex: 1;
	/* background-color: #096; */
	height: auto;
	overflow: auto;
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	#title {
		width: 100%;
		height: 32px;
		/* background-color: #096; */
		float: left;
		margin-top: 24px;
		h2 {
			padding-left: 16px;
			line-height: 32px;
			font-weight: 600;
			float: left;
			font-size: 22px;
		}
		p {
			line-height: 32px;
			float: left;
			color: rgb(159, 159, 207);
			font-size: 14px;
			padding-left: 12px;
		}
		div {
			float: right;
			line-height: 32px;
			margin-right: 32px;
			color: rgb(80, 125, 175);
			cursor: pointer;
			:hover {
				color: rgb(11, 88, 176);
			}
		}
	}
	#add {
		width: 135px;
		height: 35px;
		background-color: rgb(236, 65, 65);
		float: left;
		margin: 28px;
		cursor: pointer;
		border-radius: 32px;
		:hover {
			background-color: rgb(204, 50, 50);
		}
		.left {
			float: left;
			line-height: 35px;
			color: #fff;
			padding-left: 12px;
			font-size: 22px;
		}
		span {
			line-height: 35px;
			padding-left: 6px;
			color: #fff;
		}
		.right {
			float: right;
			line-height: 35px;
			color: #fff;
			padding-right: 6px;
		}
	}
	table {
		display: block;
		float: left;
		width: 100%;
		/* background-color: #096; */
		.title {
			height: 24px;
			line-height: 24px;
			font-size: 13px;
			width: 100%;
			display: block;
			color: rgb(136, 136, 136);
			/* background-color: #096; */
			td:nth-of-type(1) {
				width: 456px;
				padding-left: 24px;
			}
			td:nth-of-type(2) {
				width: auto;
			}
		}
		tbody {
			margin-top: 12px;
			width: 100%;
			height: auto;
			overflow: auto;
			/* background: red; */
			.content {
				margin-top: 2px;
				height: 32px;
				float: left;
				width: 960px;
				background-color: #fff;
				line-height: 32px;
				cursor: pointer;
				border-radius: 3px;
				:hover {
					background-color: rgb(249, 249, 249);
				}
				td:nth-of-type(1) {
					width: 456px;
					padding-left: 24px;
					font-size: 13px;
				}
				td:nth-of-type(2) {
					width: auto;
					font-size: 12px;
				}
				td {
					font-size: 12px;
				}
			}
		}
	}
`;
