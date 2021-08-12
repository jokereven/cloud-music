import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
	songListInformation: [],
	songCollection: [],
	songComments: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.SONG_LIST_INFORMATION:
			return state.merge({
				songListInformation: action.data,
			});
		case actionTypes.SONG_LIST_COLLECTOR:
			return state.merge({
				songCollection: action.data,
			});
		case actionTypes.GET_COMMENTS_DIS:
			return state.merge({
				songComments: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
