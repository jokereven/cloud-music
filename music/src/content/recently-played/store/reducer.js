import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	playHistoryList: [],
	playHistoryData: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_PLAY_HISTORY:
			if (localStorage.getItem('musiclist') !== null) {
				const SET = new Set(localStorage.getItem('musiclist').split(','));
				localStorage.setItem('playHistory', Array.from(SET));
				return state.merge({
					playHistoryList: Array.from(SET),
				});
			}
		case actionTypes.SHOW_HISTORICAL_PlAY:
			return state.merge({
				playHistoryData: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
