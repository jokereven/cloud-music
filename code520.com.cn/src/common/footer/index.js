import React, { Component, Fragment } from 'react';
import {
	FooterWapper,
	FooterWapperBox,
	FooterWapperList,
	FooterWapperText,
	FooterWapperWarp,
} from './style';

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<FooterWapper>
					<FooterWapperWarp>
						<FooterWapperText>
							被逼到墙角然后欣赏自己谋求生路...冲出去又发现歧路蔓延...
							但终点不远却暗色...选择直线是我的风格...
							哪怕双脚离地被挂在荆棘上...但冷静会让人退缩...
							所以装分卖傻绕行之不让人察觉我这几年的伤心...
							暂时我要的生活不是这样的...但我决定要干什么都会很像样的...
							别劝我...我无悔...为理想坚持吧...哈...
						</FooterWapperText>
						<FooterWapperBox>
							<FooterWapperList>
								<a href='http://github.com/jokereven/code520' target='_new'>
									github
								</a>
							</FooterWapperList>
							<FooterWapperList>
								<a href='http://code520.com.cn' target='_new'>
									code520
								</a>
							</FooterWapperList>
							<FooterWapperList>
								<a href='http://home.code520.com.cn' target='_new'>
									home
								</a>
							</FooterWapperList>
							<FooterWapperList>
								<a href='http://cmd.code520.com.cn' target='_new'>
									cmd
								</a>
							</FooterWapperList>
						</FooterWapperBox>
					</FooterWapperWarp>
				</FooterWapper>
			</Fragment>
		);
	}
}

export default Footer;
