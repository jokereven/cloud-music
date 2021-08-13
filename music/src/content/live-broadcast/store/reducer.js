import { fromJS } from 'immutable';
// import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	liveData: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
