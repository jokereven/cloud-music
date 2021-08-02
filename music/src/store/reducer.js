import { combineReducers } from 'redux-immutable';
import { reducer as PlayTypeReducer } from '../common/footer/store';
import { reducer as HeaderReducer } from '../common/header/store/';
import { reducer as LoginReducer } from '../content/login/store';
import { reducer as BannerListReducer } from '../content/main/store';
import { reducer as SearchListReducer } from '../content/searchlist/store';

const reducer = combineReducers({
	header: HeaderReducer,
	searchlist: SearchListReducer,
	login: LoginReducer,
	bannerlist: BannerListReducer,
	playtype: PlayTypeReducer,
});

export default reducer;
