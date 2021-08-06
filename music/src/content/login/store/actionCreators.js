import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
import {actionCreators as NavactionCreators} from '../../nav/store'

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
					localStorage.setItem('login', `${JSON.stringify(data)}`);
					dispatch(ChangeLogin(data, value));
					dispatch(NavactionCreators.loginstatus());
				} else {
					alert(data.message);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const Logout = () => {
	return () => {
		axios
			.post('http://localhost:3000/logout')
			.then(function (res) {
				const data = res.data;
				if (res.data.code === 200) {
					alert("再见📌")
					// eslint-disable-next-line no-restricted-globals
					history.go(0);
				}
			})
			.catch(function () {
				console.log('Logout failed');
			});
	};
};

export const LogOut = () => ({
	type: actionTypes.LOG_OUT,
});

export const localstorage = () => ({
	type: actionTypes.LOCAL_STORAGE,
});
