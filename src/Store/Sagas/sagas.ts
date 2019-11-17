import { call, put, takeEvery } from 'redux-saga/effects';
import Service from '../../Service/service';
import {
    PUPPIES_GET_REQUEST,
    PUPPIES_GET_SUCCESS,
    ADOPT_PUPPY_REQUEST,
    ADOPT_PUPPY_SUCCESS,
} from '../../Types/const';
import { SagaAction } from '../../Types/Types';

function* getPuppiesApi() {
    try {
        const result = yield call(Service.getPuppies);
        yield put({type: PUPPIES_GET_SUCCESS, payload: result.data});
    } catch(er) {
        console.log(er);
    }
}

function* adoptPuppyApi(action: SagaAction) {
    const puppyId = action.payload as number;
    const result =  yield call(Service.adoptPuppy, puppyId);
    yield put({type: ADOPT_PUPPY_SUCCESS, payload: result.data})
}

function* rootSaga() {
    yield takeEvery(ADOPT_PUPPY_REQUEST, adoptPuppyApi);
    yield takeEvery(PUPPIES_GET_REQUEST, getPuppiesApi);
}

export default rootSaga;

