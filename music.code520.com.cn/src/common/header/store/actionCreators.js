import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const ChangeFireList = (data) => ({
	type: actionTypes.CHANGE_FIRE_LIST,
	data: fromJS(data),
});

export const ChangeSearchList = (data) => ({
	type: actionTypes.CHANGE_SEARCH_LIST,
	data: fromJS(data),
});

export const SearchChangeList = (data, inputvalue) => ({
	type: actionTypes.SEARCH_CHANGE_LIST,
	data: fromJS(data),
	inputvalue: fromJS(inputvalue),
});

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR,
});

export const GetFireList = () => {
	return (dispatch) => {
		axios
			.get('http://localhost:3000/search/hot/detail')
			.then((res) => {
				const data = res.data;
				dispatch(ChangeFireList(data.data));
			})
			.catch(() => {
				console.error('GetFireList failed');
			});
	};
};

export const ChangeList = (key,inputvalue) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/search/suggest?keywords=${key}`)
			.then((res) => {
				const data = res;
				dispatch(SearchChangeList(data.data.result, inputvalue));
			})
			.catch(() => {
				console.error('SearchChangeList failed');
			});
	};
};

export const SearchList = (key) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/cloudsearch?keywords=${key}`)
			.then((res) => {
				const data = res;
				dispatch(ChangeSearchList(data.data));
			})
			.catch(() => {
				console.error('SearchList failed');
			});
	};
};

export const NotOnChange = () => ({
	type: actionTypes.NOT_ON_CHANGE,
});

export const OnChange = () => ({
	type: actionTypes.ON_CHANGE,
});

export const searchOver = () => ({
	type: actionTypes.SEARCH_OVER,
});

export const searchOut = () => ({
	type: actionTypes.SEARCH_OUT,
});
