import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	playtypecount: 0,
	playstatuscount: 0,
});

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.PLAY_TYPE:
			var i;
			i = action.data;
			i++;
			action.data = i;
			if (action.data === 3) {
				action.data = 0;
      }
      return state.set('playtypecount',action.data);
    case actionTypes.CHANGE_TYPE:
      var j;
      j = action.data;
      j++;
      action.data = j;
      if (action.data === 2) {
        action.data = 0;
      }
      return state.set('playstatuscount', action.data);
		default:
			return state;
	}
};

export default reducer;
