import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	privatefm: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.PIRVATE_FM_DATA:
			return state.merge({
				prompt: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
