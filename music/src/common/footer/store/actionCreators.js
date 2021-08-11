import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const playtype = (data) => ({
	type: actionTypes.PLAY_TYPE,
	data: fromJS(data),
});

export const changeplay = (data) => ({
	type: actionTypes.CHANGE_TYPE,
	data: fromJS(data),
});

export const AddMusic = (data) => ({
	type: actionTypes.ADD_MUSIC,
	data: fromJS(data),
});

export const BannerMusicPlay = () => ({
	type: actionTypes.BANNER_MUSIC_PLAY,
});

export const Audiopicshow = (data) => ({
	type: actionTypes.AUDIO_PIC_SHOW,
	data: fromJS(data),
});

// export const showLyrics = (data) => ({
// 	type: actionTypes.SHOW_LYRICS,
// 	data: fromJS(data),
// });

export const ShowMusicPic = (musicid) => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/song/detail?ids=${musicid}&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				dispatch(Audiopicshow(data));
			})
			.catch(() => {
				console.log('audiopicshow failed');
			});
	};
};

// export const ShowLyrics = (musicid) => {
// 	return (dispatch) => {
// 		axios
// 			.get(`http://localhost:3000/lyric?id=${musicid}`)
// 			.then((res) => {
// 				const data = res.data;
// 				dispatch(showLyrics(data));
// 			})
// 			.catch(() => {
// 				console.log('获取歌词失败');
// 			});
// 	};
// };

export const SetMusicList = (data) => ({
	type: actionTypes.SET_MUSIC_LIST,
	data: fromJS(data),
});

export const LyricsStatus = (data) => ({
	type: actionTypes.LYRICS_STATUS,
	data: fromJS(data),
});

export const ChangeLyricsType = () => ({
	type: actionTypes.CHANGE_LYRICS_TYPE,
});

export const PlayOneSOne = (data) => ({
	type: actionTypes.PLAY_ONE_SONE,
	data: fromJS(data),
});

export const PlayOne = (data) => ({
	type: actionTypes.PLAY_ONE,
	data: fromJS(data),
});

export const ChengesongListtype = (data) => ({
	type: actionTypes.CHANGE_SONG_LIST_TYPE,
	data: fromJS(data),
});

export const showTheSongList = (data) => ({
	type: actionTypes.SHOW_THE_SONG_LIST,
	data: fromJS(data),
});

export const SongListData = () => {
	return (dispatch) => {
		if (localStorage.getItem('playlist') !== null) {
			axios
				.get(
					`http://localhost:3000/song/detail?ids=${localStorage.getItem(
						'playlist'
					)}&t=${new Date().getTime()}`
				)
				.then((res) => {
					const data = res.data;
					dispatch(ShowMusicList(data));
				});
		}
	};
};

export const ShowMusicList = (data) => ({
	type: actionTypes.SHOW_MUSIC_LIST,
	data: fromJS(data),
});
