import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
	songListInformation: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SONG_LIST_INFORMATION:
			return state.merge({
				songListInformation: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
