import { NewPuppy } from './../../Types/Types';
import { ActionType, Puppies, APuppy } from '../../Types/Types';
import * as types from '../../Types/const';


const initialState: Puppies = [];
const puppiesReducer = (store = initialState, {type, payload}: ActionType) => {
    switch (type) {
        case types.PUPPIES_GET_SUCCESS: {
            return payload as Puppies || [];
        }
        case types.ADD_PUPPY: {
            const lastId = (store.length && store[store.length -1].id) || 1;
            const newPuppy = (payload as NewPuppy) || null;
            const puppy  = {
                ...newPuppy,
                id: lastId + 1,
                adopted: false
            };
            store.push(puppy);

            return store;
        }
        case types.DELETE_PUPPY_SUCCESS: {
            const newState = [...store];
            const id = payload;
            const index = newState.findIndex(puppy => puppy.id === id);
            newState.splice(index, 1);
            return newState;
        }
        case types.ADOPT_PUPPY_SUCCESS: {
            const newState = [...store];
            const returnedPuppy = payload as APuppy;
            const index = newState.findIndex(puppy => puppy.id === returnedPuppy.id);
            newState[index].adopted = returnedPuppy.adopted
            return newState;
        }
        default: {
            return store;
        }
    }
}

export default puppiesReducer;