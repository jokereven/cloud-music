import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const loginstatus = (data) => ({
	type: actionTypes.LOGIN_STATUS,
	data: fromJS(data),
});

export const loginsouttatus = (data) => ({
	type: actionTypes.LOGIN_OUT_STATUS,
	data: fromJS(data),
});

export const GetLoginStatus = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/login/status`)
			.then((res) => {
				const data = res;
				if (data.status === 200) {
					if (JSON.parse(localStorage.getItem('login'))['code'] === 200) {
						dispatch(loginstatus());
					} else {
						dispatch(loginsouttatus());
					}				}
			})
			.catch(() => {
				console.error('GetLoginStatus failed');
			});
	};
};
