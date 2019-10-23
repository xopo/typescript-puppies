import { ADD_PUPPY, DELETE_PUPPY, GET_PUPPIES, ADOPT_PUPPY } from '../../Types/const';
import { ActionType, Puppies, NewPuppy, APuppy } from '../../Types/Types';

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
        payload: payload
    }
}