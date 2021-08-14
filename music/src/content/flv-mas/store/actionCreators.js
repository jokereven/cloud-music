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

export const GetMV = (data) => ({
	type: actionTypes.GET_MV,
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
				console.log(data);
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

export const getMv = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/mv/first?limit=24&t=${Date.now()}`)
			.then((res) => {
				const data = res;
				// console.log(data);
				dispatch(GetMV(data.data));
			})
			.catch(() => {
				console.error('获取mv失败');
			});
	};
};

export const GetmvPlayAddress = (id) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/mv/url?id=${id}&r=1080&t=${Date.now()}`)
			.then((res) => {
				const data = res;
				window.open(data.data.data.url);
			})
			.catch(() => {
				console.error('获取mv播放地址失败');
			});
	};
};
