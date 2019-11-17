import {
    ADD_PUPPY,
    ADOPT_PUPPY_REQUEST,
    ADOPT_PUPPY_SUCCESS,
    DELETE_PUPPY,
    PUPPIES_GET_REQUEST,
    PUPPIES_GET_SUCCESS
} from './const';

export interface NewPuppy {
    name: string;
    type: string;
}


export type Puppies = Array<APuppy>

export type APuppy = NewPuppy & {
    id: number,
    adopted: boolean,
    delete?: (id: number) => void,
    adopt?: (id: number) => void
};

type Payload = string | Puppies | APuppy | NewPuppy | number | null;

type ReduxType = typeof ADD_PUPPY | typeof PUPPIES_GET_SUCCESS | typeof DELETE_PUPPY | typeof ADOPT_PUPPY_SUCCESS;

export interface ActionType {
    type: ReduxType,
    payload: Payload
}

type  SagaType = typeof PUPPIES_GET_REQUEST | typeof ADOPT_PUPPY_REQUEST;

export interface SagaAction {
    type: SagaType,
    payload: Payload
}

