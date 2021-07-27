import { reducer as HeaderReducer } from '../common/header/store/';

import { combineReducers } from 'redux-immutable';

const reducer = combineReducers({
	header: HeaderReducer,
});

export default reducer;
