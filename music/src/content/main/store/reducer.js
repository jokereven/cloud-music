import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	bannerlist: [],
	maindecommendlist: [],
	exclusiveDelivery: [],
	latestMusic: [],
	latestMV:[],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.DIS_BANNEER_LIST:
			return state.merge({
				bannerlist: action.data,
			});
		case actionTypes.DIS_RECOMMEND_LIST:
			return state.merge({
				maindecommendlist: action.data,
			});
		case actionTypes.EXCLUSIVED_LIST:
			return state.merge({
				exclusiveDelivery: action.data,
			});
		case actionTypes.LATEST_MUSIC_LIST:
			return state.merge({
				latestMusic: action.data,
			});
		case actionTypes.LATEST_MV_LIST:
			return state.merge({
				latestMV: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
