import { GET_PUPPIES } from '../../Types/const';
import { ActionType, Puppies } from '../../Types/Types';

export function getPuppies(payload:Puppies):ActionType {
    return {
        type: GET_PUPPIES,
        payload: payload
    };
}