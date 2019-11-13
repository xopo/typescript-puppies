import { 
    ADD_PUPPY, 
    DELETE_PUPPY, 
    GET_PUPPIES, 
    ADOPT_PUPPY,
    PUPPIES_GET_REQUEST
} from '../../Types/const';
import { ActionType, Puppies, NewPuppy,  SagaAction } from '../../Types/Types';

export function getPuppies(payload: Puppies): ActionType {
    return {
        type: GET_PUPPIES,
        payload: payload
    };
}

export function addPuppy(payload: NewPuppy): ActionType {
    return {
        type: ADD_PUPPY,
        payload: payload
    }
}

export function deletePuppy(payload: number): ActionType {
    return {
        type: DELETE_PUPPY,
        payload: payload
    }
}

export function adoptPuppy(payload: number): ActionType {
    return {
        type: ADOPT_PUPPY,
        payload
    }
}

export function getPuppiesRequest(payload: null = null): SagaAction {
    return {
        type: PUPPIES_GET_REQUEST,
        payload
    }
}