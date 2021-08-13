import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { PrivateFMBox, PrivateFMWapper } from './style';

class PrivateFM extends PureComponent {
	render() {
		const { privateFm } = this.props;
		return (
			<Fragment>
				<PrivateFMWapper>
					<PrivateFMBox>
						{privateFm
							? privateFm.map((item, index) => {
									if (index === 0) {
										return (
											<Fragment>
												<img src={item.getIn(['album', 'blurPicUrl'])}></img>
												<iframe
													src={`//music.163.com/outchain/player?type=2&id=${item.get("id")}&auto=1&height=66`}
												></iframe>
											</Fragment>
										);
									}
							  })
							: ''}
					</PrivateFMBox>
				</PrivateFMWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getPrivateFmData();
	}
}

export const MapState = (state) => {
	return {
		privateFm: state.getIn(['privatefm', 'prompt', 'data']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getPrivateFmData() {
			dispatch(actionCreators.GetPrivateFmData());
		},
	};
};

export default connect(MapState, MapDispatch)(PrivateFM);
