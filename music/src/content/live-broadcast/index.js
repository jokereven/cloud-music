import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { LiveStreamingWapper } from './style';

class LiveStreaming extends PureComponent {
	render() {
		return (
			<Fragment>
				<LiveStreamingWapper>
					<iframe
						src='https://look.163.com/hot'
						width='100%'
						height='100%'
						frameborder='1/0'
						name='look直播'
						scrolling='auto'
					></iframe>
				</LiveStreamingWapper>
			</Fragment>
		);
	}
	componentDidMount() {}
}

export const MapState = (state) => {
	return {};
};

export const MapDispatch = (dispatch) => {
	return {};
};

export default connect(MapState, MapDispatch)(LiveStreaming);
