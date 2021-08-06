import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	loginstatus: false,
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN_STATUS:
			return state.merge({
				loginstatus: true,
			});
		case actionTypes.LOGIN_OUT_STATUS:
			return state.merge({
				loginstatus: false,
			});
		default:
			return state;
	}
};

export default reducer;
