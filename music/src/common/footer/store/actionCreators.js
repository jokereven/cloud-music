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

export const ShowMusicPic = (musicid) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/song/detail?ids=${musicid}`)
			.then((res) => {
				const data = res.data;
				dispatch(Audiopicshow(data));
			})
			.catch(() => {
				console.log('audiopicshow failed');
			});
	};
};

export const SetMusicList = (data) => ({
	type: actionTypes.SET_MUSIC_LIST,
	data: fromJS(data),
});
