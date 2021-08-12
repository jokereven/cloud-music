import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const GetTheSongListInformation = (data) => ({
	type: actionTypes.SONG_LIST_INFORMATION,
	data: fromJS(data),
});

export const GetASongListCollector = (data) => ({
	type: actionTypes.SONG_LIST_COLLECTOR,
	data: fromJS(data),
});

export const GetCommentsDis = (data) => ({
	type: actionTypes.GET_COMMENTS_DIS,
	data: fromJS(data),
});

export const getTheSongListInformation = (id) => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/playlist/detail?id=${id}&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res;
				dispatch(GetTheSongListInformation(data.data));
			})
			.catch(() => {
				console.error('获取歌单信息失败');
			});
	};
};

export const getASongListCollector = (id) => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/playlist/subscribers?id=${id}&limit=20&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res;
				dispatch(GetASongListCollector(data.data));
			})
			.catch(() => {
				console.error('获取歌单收藏者信息失败');
			});
	};
};

export const GetComments = (id) => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/comment/playlist?id=${id}&limit=20&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res;
				dispatch(GetCommentsDis(data.data));
			})
			.catch(() => {
				console.error('获取歌单收藏者信息失败');
			});
	};
};
