import { takeEvery, call, put } from 'redux-saga/effects';

import {
	getPageData
} from './api';

import {
	REQUEST_PAGE_DATA,

	receivePageData,
} from './actions';

function* callRequestPageData(action) {
	let payload = (action.payload ? action.payload.pageNumber : 1 ) 
	var results = yield call (getPageData, payload);

	yield put(receivePageData(results));
}

export function* requestPageDataSaga() {
	yield takeEvery(REQUEST_PAGE_DATA, callRequestPageData);
}