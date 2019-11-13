import { call, put, takeEvery } from 'redux-saga/effects';
import Service from '../../Service/service';
import {
    PUPPIES_GET_REQUEST,
    PUPPIES_GET_SUCCESS
} from '../../Types/const';

function* getPuppiesApi() {
    try {
        const puppies = yield call(Service.getPuppies);
        yield console.log({puppies}, 'next dispatch and send to store');
        yield put({type: PUPPIES_GET_SUCCESS, message: puppies});
    } catch(er) {
        console.log(er);
    }
}

function* getPuppiesSaga() {
    yield takeEvery(PUPPIES_GET_REQUEST, getPuppiesApi);
}

export default getPuppiesSaga;