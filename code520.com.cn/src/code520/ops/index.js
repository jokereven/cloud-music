import React, { Fragment, PureComponent } from 'react';
import { OpsWapper, OpsWapperHeader } from './style';

class More extends PureComponent {
	render() {
		return (
			<Fragment>
				<OpsWapper>
					<OpsWapperHeader>
						<h1
							style={{
								textAlign: 'center',
								fontFamily: '宋体',
								lineHeight: '36px',
							}}
						>
							运维
						</h1>
					</OpsWapperHeader>
				</OpsWapper>
			</Fragment>
		);
	}
}

export default More;
