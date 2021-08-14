import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	userdata: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.USER_DATA:
			return state.merge({
				userdata: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
