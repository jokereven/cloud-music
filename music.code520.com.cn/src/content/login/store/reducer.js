import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	login: false,
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_LOGIN:
			return state.merge({
				login: true,
				userdata: action.data,
			});
		case actionTypes.LOCAL_STORAGE:
			return state.merge({
				login: true,
			});
		case actionTypes.LOG_OUT:
			return state.set('login', false);
		default:
			return state;
	}
};

export default reducer;
