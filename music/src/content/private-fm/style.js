import styled from 'styled-components';

export const PrivateFMWapper = styled.div`
	flex: 1;
	/* background-color: #096; */
`;

export const PrivateFMBox = styled.div`
	width: 400px;
	height: 400px;
  margin-left: 35px;
	/* background-color: #096; */
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
	iframe {
    position: absolute;
		width: 330px;
		height: 80px;
    top: 160px;
	}
`;
