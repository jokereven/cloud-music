import React, { Fragment, PureComponent } from 'react';
import { StackWapper, StackWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<StackWapper>
					<StackWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							项目
						</h1>
					</StackWapperHeader>
				</StackWapper>
			</Fragment>
		);
	}
}

export default More;
