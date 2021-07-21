import styled from 'styled-components';

export const FooterWapper = styled.div`
	height: 115px;
	width: 100vw;
	background: #fff;
`;

export const FooterWapperWarp = styled.div`
	margin: 0 auto;
	width: 960px;
	height: 100%;
	background: #eee;
`;

export const FooterWapperText = styled.div`
	float: left;
	color: #999;
	width: 50%;
	height: 100%;
	font-size: 12px;
	padding: 2px;
	line-height: 28.75px;
	border-right: 1px solid #ccc;
	text-decoration: line-through;
	:hover {
		cursor: pointer;
		color: #aaa;
	}
`;

export const FooterWapperBox = styled.div`
	float: left;
  display: flex;
  justify-content: space-around;
	width: 50%;
	height: 100%;
`;

export const FooterWapperList = styled.div`
  margin-top: 24px;
	width: 50px;
	height: 45px;
	border-radius: 50%;
  box-shadow: 0 0 1px #ccc;
  border: 1px solid #ccc;
  a{
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: underline;
    text-align: center;
    font-size: 10px;
    line-height: 45px;
    color: #ccc;
  }
`;
