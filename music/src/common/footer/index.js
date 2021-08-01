import React, { Fragment, PureComponent } from 'react';
import {
	FooterWapper,
	MusicWapperLeft,
	MusicWapper,
	MusicWapperRight,
	MusicWapperCenter,
} from './style';

class Footer extends PureComponent {
	render() {
		return (
			<Fragment>
				<FooterWapper>
					<MusicWapper>
						<MusicWapperLeft></MusicWapperLeft>
						<MusicWapperCenter>
							<audio
								controls
								src='http://music.163.com/song/media/outer/url?id=1864588584.mp3'
							></audio>
						</MusicWapperCenter>
						<MusicWapperRight></MusicWapperRight>
					</MusicWapper>
				</FooterWapper>
			</Fragment>
		);
	}
}

export default Footer;
