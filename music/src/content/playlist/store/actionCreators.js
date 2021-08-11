import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const GetTheSongListInformation = (data) => ({
	type: actionTypes.SONG_LIST_INFORMATION,
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
