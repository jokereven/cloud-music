import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	videoData: [],
	playAddress: [],
	mvData: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.AUDIO:
			return state.merge({
				videoData: action.data,
			});
		case actionTypes.AUDIO_PLAY_ADDRESS:
			return state.merge({
				playAddress: action.data,
			});
		case actionTypes.GET_MV:
			return state.merge({
				mvData: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
