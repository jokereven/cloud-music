import React, { Fragment, PureComponent } from 'react';
import { FrontWapper, FrontWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<FrontWapper>
					<FrontWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							前端
						</h1>
					</FrontWapperHeader>
				</FrontWapper>
			</Fragment>
		);
	}
}

export default More;
