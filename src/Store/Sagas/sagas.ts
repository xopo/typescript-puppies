import { call, put, takeEvery } from 'redux-saga/effects';
import Service from '../../Service/service';
import * as types from '../../Types/const';
import { SagaAction } from '../../Types/Types';

function* getPuppiesApi() {
    try {
        const result = yield call(Service.getPuppies);
        yield put({type: types.PUPPIES_GET_SUCCESS, payload: result.data});
    } catch(er) {
        console.log(er);
    }
}

function* adoptPuppyApi(action: SagaAction) {
    const puppyId = action.payload as number;
    const result =  yield call(Service.adoptPuppy, puppyId);
    yield put({type: types.ADOPT_PUPPY_SUCCESS, payload: result.data})
}

function* deletePuppiesApi(action: SagaAction) {
    const puppyId = action.payload as number;
    const result =  yield call(Service.deletePuppy, puppyId);
    yield put({type: types.DELETE_PUPPY_SUCCESS, payload: result.data})
}

function* rootSaga() {
    yield takeEvery(types.ADOPT_PUPPY_REQUEST, adoptPuppyApi);
    yield takeEvery(types.PUPPIES_GET_REQUEST, getPuppiesApi);
    yield takeEvery(types.DELETE_PUPPY_REQUEST, deletePuppiesApi);
}

export default rootSaga;

