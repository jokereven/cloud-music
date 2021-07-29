/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
	loader: () => import('./'),
	loading() {
		return <div>加载中...</div>;
	},
});

export default () => <LoadableComponent />;
