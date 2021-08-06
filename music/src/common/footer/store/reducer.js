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
			const musiclist = [...state.get('MusicList')];
			musiclist.push(action.data);
			let SET = new Set(musiclist);
			localStorage.setItem('musiclist', Array.from(SET));
			// localStorage.setItem('recentlyPlayed',Array.from(SET))
			// const newState = JSON.parse(JSON.stringify(state));
			// console.log(newState.MusicList);
			// newState.MusicList.push(action.data);
			// console.log(action.data.toString());
			return state.set('MusicList', musiclist);
		case actionTypes.BANNER_MUSIC_PLAY:
			return state.set('playstatuscount', 1);
		// case actionTypes.AUDIO_PIC_SHOW:
		// 	return state.set('onplaymusic', action.data);
		default:
			return state;
	}
};

export default reducer;
