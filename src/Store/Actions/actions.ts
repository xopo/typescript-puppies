import { DELETE_PUPPY_REQUEST } from './../../Types/const';
import {
    ADD_PUPPY,
    ADOPT_PUPPY_REQUEST,
    PUPPIES_GET_SUCCESS,
    PUPPIES_GET_REQUEST
} from '../../Types/const';
import { ActionType, Puppies, NewPuppy,  SagaAction } from '../../Types/Types';

export function getPuppies(payload: Puppies): ActionType {
    return {
        type: PUPPIES_GET_SUCCESS,
        payload: payload
    };
}

export function addPuppy(payload: NewPuppy): ActionType {
    return {
        type: ADD_PUPPY,
        payload: payload
    }
}

export function deletePuppy(payload: number): SagaAction {
    return {
        type: DELETE_PUPPY_REQUEST,
        payload: payload
    }
}

export function adoptPuppyRequest(payload: number): SagaAction {
    return {
        type: ADOPT_PUPPY_REQUEST,
        payload
    }
}

export function getPuppiesRequest(payload: null = null): SagaAction {
    return {
        type: PUPPIES_GET_REQUEST,
        payload
    }
}