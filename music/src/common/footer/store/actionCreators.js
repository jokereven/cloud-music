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

// export const Audiopicshow = (data) => ({
// 	type: actionTypes.AUDIO_PIC_SHOW,
// 	data: fromJS(data),
// });

export const audiopicshow = (musicid, dispatch) => {
	axios
		.get(`http://localhost:3000/song/detail?ids=${musicid}`)
		.then((res) => {
			const data = res.data;
			console.log(res);
			// dispatch(Audiopicshow(data.data));
		})
		.catch(() => {
			console.log('audiopicshow failed');
		});
};
