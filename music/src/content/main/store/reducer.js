import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	bannerlist:[],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.DIS_BANNEER_LIST:
			return state.merge({
				bannerlist: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
