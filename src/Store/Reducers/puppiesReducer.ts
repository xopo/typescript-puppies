import { NewPuppy } from './../../Types/Types';
import { ActionType, Puppies } from '../../Types/Types';
import * as types from '../../Types/const';
import { PUPPIES as mockPuppies } from '../../mock.data';
import store from '../store';

const initialState: Puppies = mockPuppies;

const puppies = (store = initialState, action: ActionType) => {
    switch (action.type) {
        case types.GET_PUPPIES: {
            return mockPuppies;
        }
        case types.ADD_PUPPY: {
            const lastId = store[store.length -1].id;
            const newPuppy = (action.payload as NewPuppy) || null;
            const puppy  = {
                ...newPuppy,
                id: lastId + 1,
                adopted: false
            };
            store.push(puppy);
            
            return store;
        }
        default: {
            return store;
        }
    }
}

export default puppies;