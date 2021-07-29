/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
	loader: () => import('./'),
	loading() {
		return (
			<span
				style={{ fontFamily: '宋体', fontSize: '24px', margin:"49px auto" }}
			>
				加载中...
			</span>
		);
	},
});

export default () => <LoadableComponent />;
