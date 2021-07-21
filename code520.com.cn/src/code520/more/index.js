import React, { Fragment, PureComponent } from 'react';
import { MoreWapper, MoreWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<MoreWapper>
					<MoreWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							...
						</h1>
					</MoreWapperHeader>
				</MoreWapper>
			</Fragment>
		);
	}
}

export default More;
