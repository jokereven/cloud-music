// import axios from 'axios';
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
})

export const BannerMusicPlay = () => ({
	type: actionTypes.BANNER_MUSIC_PLAY,
})
