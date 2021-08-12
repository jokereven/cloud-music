import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const DisbannerList = (data) => ({
	type: actionTypes.DIS_BANNEER_LIST,
	data: fromJS(data),
});

export const DisrecommendList = (data) => ({
	type: actionTypes.DIS_RECOMMEND_LIST,
	data: fromJS(data),
});

export const ExclusivedeliveryList = (data) => ({
	type: actionTypes.EXCLUSIVED_LIST,
	data: fromJS(data),
});

export const LatestMusicList = (data) => ({
	type: actionTypes.LATEST_MUSIC_LIST,
	data: fromJS(data),
});

export const LatestMVList = (data) => ({
	type: actionTypes.LATEST_MV_LIST,
	data: fromJS(data),
});

export const Disbanner = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/banner`)
			.then((res) => {
				const data = res;
				dispatch(DisbannerList(data.data));
			})
			.catch(() => {
				console.error('DisbannerList failed');
			});
	};
};

export const Disrecommend = () => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/personalized?limit=10&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				dispatch(DisrecommendList(data.result));
			})
			.catch(() => {
				console.log('获取推荐歌单失败');
			});
	};
};

export const Exclusivedelivery = () => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/personalized/privatecontent/list?limit=3&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(ExclusivedeliveryList(data.result));
			})
			.catch(() => {
				console.log('获取独家放送失败');
			});
	};
};

export const LatestMusic = () => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/personalized/newsong?limit=12&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				// console.log(data.result);
				dispatch(LatestMusicList(data.result));
			})
			.catch(() => {
				console.log('获取推荐新音乐失败');
			});
	};
};

export const LatestMv = () => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/personalized/mv?limit=3&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(LatestMVList(data.result));
			})
			.catch(() => {
				console.log('获取推荐mv失败');
			});
	};
};

export const SongListClassification = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/playlist/hot`)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(ListClassification(data));
			})
			.catch(() => {
				console.log('获取推荐歌单分类失败');
			});
	};
};

export const GetTherecommendSongList = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/top/playlist?t=${new Date().getTime()}`)
			.then((res) => {
				const data = res.data;
				dispatch(TherecommendSongList(data));
			})
			.catch(() => {
				console.log('获取推荐歌单失败');
			});
	};
};

export const ChangeTheSongListType = (type) => {
	return (dispatch) => {
		axios
			.get(
				`http://localhost:3000/top/playlist?cat=${type}&limit=50&t=${new Date().getTime()}`
			)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(TherecommendSongList(data));
			})
			.catch(() => {
				console.log('获取推荐歌单分类失败');
			});
	};
};

export const TherecommendSongList = (data) => ({
	type: actionTypes.THE_RECOMMENDS_SONG_LIST,
	data: fromJS(data),
});

export const ListClassification = (data) => ({
	type: actionTypes.LIST_CLASS_IFICATION,
	data: fromJS(data),
});

export const getALeaderboard = (data) => ({
	type: actionTypes.GET_ALEADER_BOARD,
	data: fromJS(data),
});

export const GetALeaderboard = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/toplist`)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(getALeaderboard(data));
			})
			.catch(() => {
				console.log('获取排行失败');
			});
	};
};
