import React, { Fragment, PureComponent } from 'react';
import { LifeWapper, LifeWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<LifeWapper>
					<LifeWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							生活
						</h1>
					</LifeWapperHeader>
				</LifeWapper>
			</Fragment>
		);
	}
}

export default More;
