import React, { Fragment, PureComponent } from 'react';
import { AfterWapper, AfterWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<AfterWapper>
					<AfterWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							后端
						</h1>
					</AfterWapperHeader>
				</AfterWapper>
			</Fragment>
		);
	}
}

export default More;
