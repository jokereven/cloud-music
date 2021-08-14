import styled from 'styled-components';

export const UserWapper = styled.div`
	flex: 1;
	height: auto;
	/* background-color: #096; */
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: rgba(240, 240, 240, 1);
	}
	img {
		width: 256px;
		height: 256px;
		float: left;
	}
	.h2 {
		font-weight: 600;
		font-size: 16px;
		padding: 4px;
	}
	.grade {
		padding-top: 6px;
		font-size: 12px;
	}
  .selfIntroduction{
    width: auto;
    height: auto;
    margin-top: 12px;
    font-size: 13px;
    font-family: 宋体;
  }
`;
