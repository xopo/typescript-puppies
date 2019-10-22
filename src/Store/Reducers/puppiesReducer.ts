import { ActionType, Puppies } from '../../Types/Types';
import * as types from '../../Types/const';
import { puppies as mockPuppies } from '../../mock.data';

const initialState: Puppies = [];

const puppies = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case types.GET_PUPPIES: {
            return mockPuppies;
        }
        default: {
            return state;
        }
    }
}

export default puppies;