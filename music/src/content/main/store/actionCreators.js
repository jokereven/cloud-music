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

export const ListenList = (data) => ({
	type: actionTypes.LISTEN_LIST,
	data:fromJS(data),
})

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
			.get(`http://localhost:3000/personalized?limit=10`)
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
			.get(`http://localhost:3000/personalized/privatecontent/list?limit=3`)
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
			.get(`http://localhost:3000/personalized/newsong?limit=12`)
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
			.get(`http://localhost:3000/personalized/mv?limit=3`)
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

export const Listen = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/dj/toplist/popular?limit=5`)
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(ListenList(data.data));
			})
			.catch(() => {
				console.log('获取听听失败');
			});
	};
};
