import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../common/header/store/';
import { reducer as LoginReducer } from '../content/login/store';
import { reducer as SearchListReducer } from '../content/searchlist/store';
import {reducer as BannerListReducer} from '../content/main/store'

const reducer = combineReducers({
	header: HeaderReducer,
	searchlist: SearchListReducer,
	login: LoginReducer,
	bannerlist: BannerListReducer,
});

export default reducer;
