import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({ focused: false });

export default (state = defaultState, action) => {
	if (action.type === actionTypes.SEARCH_FOCUS) {
		return state.set('focused', true);
	}
	if (action.type === actionTypes.SEARCH_BLUR) {
		return state.set('focused', false);
	}
	return state;
};
