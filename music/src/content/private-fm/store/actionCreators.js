import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const PrivateFmData = (data) => ({
	type: actionTypes.PIRVATE_FM_DATA,
	data: fromJS(data),
});

export const GetPrivateFmData = () => {
	return (dispatch) => {
		axios
			.get(`http://localhost:3000/personal_fm`)
			.then((res) => {
        const data = res;
        dispatch(PrivateFmData(data.data));
			})
			.catch(() => {
				console.error('获取私人fm');
			});
	};
};
