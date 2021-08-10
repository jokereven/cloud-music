import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	playtypecount: 0,
	playstatuscount: 0,
	Lyricstypecount: 0,
	MusicList: [],
	onplaymusic: [],
	onplaymusiclyrics: [],
	songListcount: 0,
	playList: [],
	songList: [],
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
			return state.set('onplaymusic', action.data);
		// case actionTypes.SHOW_LYRICS:
		// 	if (state.getIn(['onplaymusiclyrics', 'lrc', 'lyric'])) {
		// 		let LyricsArr = state
		// 			.getIn(['onplaymusiclyrics', 'lrc', 'lyric'])
		// 			.split('\n');
		// 		for (var index in LyricsArr) {
		// 			var arr = [];
		// 			arr.push(LyricsArr[index]);
		// 		}
		// 		console.log(LyricsArr);
		// 	}
		// 	return state.set('onplaymusiclyrics', action.data);
		case actionTypes.LYRICS_STATUS:
			var x;
			x = action.data;
			x++;
			action.data = x;
			if (action.data === 2) {
				action.data = 0;
			}
			return state.set('Lyricstypecount', action.data);
		case actionTypes.CHANGE_SONG_LIST_TYPE:
			var z;
			z = action.data;
			z++;
			action.data = z;
			if (action.data === 2) {
				action.data = 0;
			}
			return state.set('songListcount', action.data);
		case actionTypes.CHANGE_LYRICS_TYPE:
			return state.set('Lyricstypecount', 0);
		case actionTypes.SHOW_THE_SONG_LIST:
			if (localStorage.getItem('musiclist') !== null) {
				const SET = new Set(localStorage.getItem('musiclist').split(','));
				localStorage.setItem('playlist', Array.from(SET));
				return state.merge({
					playList: Array.from(SET),
				});
			}
		case actionTypes.SHOW_MUSIC_LIST:
			return state.merge({
				songList: action.data,
			});
		default:
			return state;
	}
};

export default reducer;
