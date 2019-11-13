import * as actions from '../../Store/Actions/actions';
import * as types from '../../Types/Types';
import * as consts from '../../Types/const';

describe('actions', () => {
    it('should create a action for addPuppy action', () => {
        const aPuppy: types.APuppy = {
            name: 'a good name',
            type: 'husky',
            id: 35,
            adopted: false
        }
        const addedPuppy = {
            type: consts.ADD_PUPPY,
            payload: aPuppy
        }
        expect(actions.addPuppy(aPuppy)).toEqual(addedPuppy);
    });

    it('should create an action for deletePuppy action', () => {
        const deletedPuppy = {
            type: consts.DELETE_PUPPY,
            payload: 34
        }
        expect(actions.deletePuppy(34)).toEqual(deletedPuppy);
    });

    it('should create an action for adoptPuppy action', () => {
        const adoptedPuppy = {
            type: consts.ADOPT_PUPPY,
            payload: 34
        }
        expect(actions.adoptPuppy(34)).toEqual(adoptedPuppy);
    });
});