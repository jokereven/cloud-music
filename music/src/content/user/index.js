import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { UserWapper } from './style';

class User extends PureComponent {
	render() {
		const { userdata } = this.props;
		return (
			<Fragment>
				<UserWapper>
					{userdata ? (
						<Fragment>
							<img src={userdata.getIn(['profile', 'backgroundUrl'])}></img>
							<div className='h2'>
								{userdata.getIn(['profile', 'nickname'])}
							</div>
							<div className='grade'>lv{userdata.get('level')}</div>
							<div className='selfIntroduction'>
								{userdata.getIn(['profile','signature'])}
							</div>
						</Fragment>
					) : (
						''
					)}
				</UserWapper>
			</Fragment>
		);
	}
	componentDidMount() {
		this.props.getUserInformation(this.props.match.params.id);
	}
}

export const MapState = (state) => {
	return {
		userdata: state.getIn(['user', 'userdata']),
	};
};

export const MapDispatch = (dispatch) => {
	return {
		getUserInformation(id) {
			dispatch(actionCreators.GetUserInformation(id));
		},
	};
};

export default connect(MapState, MapDispatch)(User);
