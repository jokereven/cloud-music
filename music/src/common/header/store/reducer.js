import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	focused: false,
	firelist: [],
	searchlist: [],
	changelist: [],
	onchange: false,
	searchenter: false,
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_FOCUS:
			return state.set('focused', true);
		case actionTypes.SEARCH_BLUR:
			return state.set('focused', false);
		case actionTypes.CHANGE_FIRE_LIST:
			return state.set('firelist', action.data);
		case actionTypes.CHANGE_SEARCH_LIST:
			return state.set('searchlist', action.data);
		case actionTypes.SEARCH_CHANGE_LIST:
			return state.merge({
				changelist: action.data,
				inputvalue: action.inputvalue,
			});
		case actionTypes.NOT_ON_CHANGE:
			return state.merge({
				onchange: false,
			});
		case actionTypes.ON_CHANGE:
			return state.merge({
				onchange: true,
			});
		case actionTypes.SEARCH_OVER:
			return state.merge({
				searchenter: true,
			});
		case actionTypes.SEARCH_OUT:
			return state.merge({
				searchenter: false,
			});
		default:
			return state;
	}
};

export default reducer;
