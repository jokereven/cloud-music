import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	searchsinglelist: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.TO_SEARCH_SINGLE_LIST:
			return state.merge({
				searchsinglelist: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
