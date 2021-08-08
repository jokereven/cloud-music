import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	playtypecount: 0,
	playstatuscount: 0,
	MusicList: [],
	onplaymusic: [],
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.PLAY_TYPE:
			var i;
			i = action.data;
			i++;
			action.data = i;
			if (action.data === 3) {
				action.data = 0;
			}
			return state.set('playtypecount', action.data);
		case actionTypes.CHANGE_TYPE:
			var j;
			j = action.data;
			j++;
			action.data = j;
			if (action.data === 2) {
				action.data = 0;
			}
			return state.set('playstatuscount', action.data);
		case actionTypes.ADD_MUSIC:
			// console.log(state.get('MusicList').size);
			const musiclist = [...state.get('MusicList')];
			// console.log(musiclist);
			musiclist.push(action.data);
			let SET = new Set(musiclist);
			// console.log(SET);
			localStorage.setItem('musiclist', Array.from(SET));
			return state.set('MusicList', musiclist);
		// localStorage.setItem('recentlyPlayed',Array.from(SET))
		// const newState = JSON.parse(JSON.stringify(state));
		// console.log(newState.MusicList);
		// newState.MusicList.push(action.data);
		// console.log(action.data.toString());
		case actionTypes.BANNER_MUSIC_PLAY:
			return state.set('playstatuscount', 1);
		// case actionTypes.AUDIO_PIC_SHOW:
		// 	return state.set('onplaymusic', action.data);
		case actionTypes.SET_MUSIC_LIST:
			// console.log("123");
			// console.log(action.data);
			const list = [...state.get('MusicList')];
			// console.log(musiclist);
			list.push(action.data);
			let S = new Set(list);
			// console.log(SET);
			localStorage.setItem('musiclist', Array.from(S));
			return state.set('MusicList', list);
		case actionTypes.AUDIO_PIC_SHOW:
			return state.set("onplaymusic",action.data)
		default:
			return state;
	}
};

export default reducer;
