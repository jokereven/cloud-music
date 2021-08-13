import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const getvideo = (data) => ({
	type: actionTypes.AUDIO,
	data: fromJS(data),
});

export const GetvideoplayAddress = (data) => ({
	type: actionTypes.AUDIO_PLAY_ADDRESS,
	data: fromJS(data),
});

export const GetVideo = () => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/related/allvideo?id=${Date.now()}&t=${Date.now()}`
			)
			.then((res) => {
        const data = res;
				dispatch(getvideo(data.data));
			})
			.catch(() => {
				console.error('获取视频失败');
			});
	};
};

export const getVideoPlaybackAddresses = (vid) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/video/url?id=${vid}&t=${Date.now()}`)
			.then((res) => {
        const data = res;
        dispatch(GetvideoplayAddress(data.data));
        window.open(data.data.urls[0].url);
			})
			.catch(() => {
				console.error('获取视频播放地址失败');
			});
	};
};
