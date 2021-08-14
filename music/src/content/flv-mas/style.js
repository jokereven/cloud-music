import styled from 'styled-components';

export const VideoMVWapper = styled.div`
	flex: 1;
	overflow: auto;
	/* background-color: #096; */
	::-webkit-scrollbar {
		width: 6px;
		height: 6px;
		background-color: rgba(240, 240, 240, 1);
	}
	margin-bottom: 35px;
`;

export const VideoWapper = styled.div`
	width: 100%;
	height: auto;
	/* background-color: #096; */
	h2 {
		font-size: 21px;
		font-weight: 600;
		padding: 6px;
	}
	.father {
		display: grid;
		/*  声明了三列，宽度分别为 200px 100px 200px */
		grid-template-columns: 320px 320px 320px;
		grid-gap: 21px;
		/*  声明了两行，行高分别为 50px 50px  */
		grid-template-rows: auto auto;
		.refresh {
			cursor: pointer;
			font-size: 15px;
			font-weight: 600;
			padding: 35px;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background-color:rgb(165, 29, 29);
		}
	}
	img {
		width: 300px;
		height: 145px;
		cursor: pointer;
		float: left;
	}
	span:nth-of-type(1) {
		font-size: 12px;
		float: left;
	}
`;

export const MVWapper = styled.div`
	width: 100%;
	height: auto;
	/* background-color: #096; */
	h2 {
		font-size: 21px;
		font-weight: 600;
		padding: 6px;
	}
	.father {
		width: 100%;
		height: auto;
		/* background-color: #096; */
		display: grid;
		/*  声明了三列，宽度分别为 200px 100px 200px */
		grid-template-columns: 320px 320px 320px;
		grid-gap: 21px;
		/*  声明了两行，行高分别为 50px 50px  */
		grid-template-rows: auto auto auto auto auto auto auto auto;
		div {
			/* background-color: #096; */
			img {
				width: 320px;
				height: 145px;
				cursor: pointer;
			}
			span{
				font-size: 12px;
				color: #666;
			}
		}
	}
`;
