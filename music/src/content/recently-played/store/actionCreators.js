import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const GetPlayHistory = () => ({
	type: actionTypes.GET_PLAY_HISTORY,
});

export const ShowHistoricalPlay = (data) => ({
  type: actionTypes.SHOW_HISTORICAL_PlAY,
  data:fromJS(data),
});

export const showHistoricalPlay = () => {
	return (dispatch) => {
		if (localStorage.getItem('playHistory') !== null) {
			axios
				.get(
					`http://localhost:3000/song/detail?ids=${localStorage.getItem(
						'playHistory'
					)}&t=${new Date().getTime()}`
				)
				.then((res) => {
					const data = res.data;
					dispatch(ShowHistoricalPlay(data));
				});
		}
	};
};
