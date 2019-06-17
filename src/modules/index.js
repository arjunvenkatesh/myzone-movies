import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fork, all } from 'redux-saga/effects';

import { movieActions } from './movies/reducers';
import * as moviesSagas from './movies/sagas';

export const rootReducer = combineReducers({
	movieActions
});

export function* rootSaga() {
	yield all([
		...Object.values(moviesSagas),
	].map(fork));
}