// import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const playtype = (data) => ({
	type: actionTypes.PLAY_TYPE,
	data: fromJS(data),
});

export const changeplay = (data) => ({
	type: actionTypes.CHANGE_TYPE,
	data: fromJS(data),
});
