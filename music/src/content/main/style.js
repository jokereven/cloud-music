import styled from 'styled-components';

export const MainFindWapper = styled.div`
	flex: 1;
	height: 456px;
	overflow: auto;
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	.carousel {
		border-radius: 4px;
		width: 520px;
		height: 200px;
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
	height: 400px;
	overflow: auto;
	margin-top: -8px;
`;
