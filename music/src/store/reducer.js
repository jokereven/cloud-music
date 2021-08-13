import { combineReducers } from 'redux-immutable';
import { reducer as PlayTypeReducer } from '../common/footer/store';
import { reducer as HeaderReducer } from '../common/header/store/';
import { reducer as liveStreamingReducer } from '../content/live-broadcast/store';
import { reducer as LoginReducer } from '../content/login/store';
import { reducer as BannerListReducer } from '../content/main/store';
import { reducer as NavReducer } from '../content/nav/store';
import { reducer as songListReducer } from '../content/playlist/store';
import { reducer as RecentlyReducer } from '../content/recently-played/store';
import { reducer as SearchListReducer } from '../content/searchlist/store';

const reducer = combineReducers({
	header: HeaderReducer,
	searchlist: SearchListReducer,
	login: LoginReducer,
	bannerlist: BannerListReducer,
	playtype: PlayTypeReducer,
	nav: NavReducer,
	history: RecentlyReducer,
	songList: songListReducer,
	liveStreaming: liveStreamingReducer,
});

export default reducer;
