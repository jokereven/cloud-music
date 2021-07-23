import React, { Fragment, PureComponent } from 'react';
import { PrimaryWapper, PrimaryWapperBack, PrimaryWapperList } from './style';

class Primary extends PureComponent {
	render() {
		return (
			<Fragment>
				<PrimaryWapper>
					<PrimaryWapperList>
						<a href='http://cmd.code520.com.cn' target='_new'>
							cmd.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://home.code520.com.cn' target='_new'>
							home.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://doc.code520.com.cn' target='_new'>
							doc.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://music.code520.com.cn' target='_new'>
							music.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://code520.com.cn' target='_new'>
							dome.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://www.code520.com.cn' target='_new'>
							www.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='http://dome.code520.com.cn' target='_new'>
							dome.code520.com.cn
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='/' target='_blank'>
							加载中...
						</a>
					</PrimaryWapperList>
					<PrimaryWapperList>
						<a href='/' target='_blank'>
							加载中...
						</a>
					</PrimaryWapperList>
				</PrimaryWapper>
				<PrimaryWapperBack>
					<p>我的愿望是世界和平📌</p>
				</PrimaryWapperBack>
			</Fragment>
		);
	}
}

export default Primary;
