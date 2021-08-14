import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const userdata = (data) => ({
	type: actionTypes.USER_DATA,
	data: fromJS(data),
});

export const GetUserInformation = (id) => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/user/detail?uid=${id}&t=${Date.now()}`)
			.then((res) => {
        const data = res;
        dispatch(userdata(data.data));
			})
			.catch(() => {
				console.error('获取用户信息失败');
			});
	};
};
