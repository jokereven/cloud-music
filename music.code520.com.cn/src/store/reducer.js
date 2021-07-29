import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store/';
import { reducer as SearchListReducer } from '../content/searchlist/store';

const reducer = combineReducers({
	header: HeaderReducer,
	searchlist: SearchListReducer,
});

export default reducer;
