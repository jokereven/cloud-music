import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store/';
import { reducer as LoginReducer } from '../content/login/store';
import { reducer as SearchListReducer } from '../content/searchlist/store';

const reducer = combineReducers({
	header: HeaderReducer,
	searchlist: SearchListReducer,
	login: LoginReducer,
});

export default reducer;
