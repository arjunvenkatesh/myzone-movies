import { handleAction, combineActions } from 'redux-actions';

import {
	RECEIVE_PAGE_DATA,

	receivePageData
} from './actions';

var defaultState = {
	items: []
};

export const movieActions = handleAction(

	combineActions(
		receivePageData
	), 
	{
		next(state, action) {
			switch (action.type) {
				
				case RECEIVE_PAGE_DATA:
					var newState = {
						...state
					};

					newState.pageData = action.payload;

					return newState;

				default:
					return state;
			}
		},

		throw(state, action) {
			switch (action.type) {

				case RECEIVE_PAGE_DATA:
					var newState = {
						...state
					};

					newState.pageDataError = action.payload;

					return newState;

				default:
					return state;
			}
		}
	}, defaultState
)