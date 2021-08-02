import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const ChangeLogin = (data) => ({
	type: actionTypes.CHANGE_LOGIN,
	data: fromJS(data),
});

export const login = (account, password) => {
	return (dispatch) => {
		axios
			.post(
				`http://localhost:3000/login/cellphone?phone=${account}&password=${password}&t=${new Date().getTime()}`,
				{}
			)
			.then(function (res, value) {
				const data = res.data;
				if (data.code === 200) {
					alert('登录成功');
					localStorage.setItem('login',`${JSON.stringify(data)}`)
					dispatch(ChangeLogin(data, value));
				} else {
					alert(data.message);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const LogOut = () => ({
	type: actionTypes.LOG_OUT,
});

export const localstorage = () => ({
	type: actionTypes.LOCAL_STORAGE,
});
