import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const Tosearchsinglelist = (data) => ({
	type: actionTypes.TO_SEARCH_SINGLE_LIST,
	data: fromJS(data),
});

export const ToSearchSingleList = (key) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/cloudsearch?keywords=${key}&type=1`)
			.then((res) => {
				const data = res;
				dispatch(Tosearchsinglelist(data.data));
			})
			.catch(() => {
				console.error('SearchList failed');
			});
	};
};
