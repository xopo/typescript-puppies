import { ADD_PUPPY } from './../../Types/const';
import { GET_PUPPIES } from '../../Types/const';
import { ActionType, Puppies, NewPuppy } from '../../Types/Types';

export function getPuppies(payload:Puppies):ActionType {
    return {
        type: GET_PUPPIES,
        payload: payload
    };
}

export function addPuppy(payload:NewPuppy): ActionType {
    return {
        type: ADD_PUPPY,
        payload: payload
    }
}