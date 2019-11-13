import { GET_PUPPIES, ADD_PUPPY, DELETE_PUPPY, ADOPT_PUPPY, PUPPIES_GET_REQUEST } from './const';

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

type ReduxType = typeof ADD_PUPPY | typeof GET_PUPPIES | typeof DELETE_PUPPY | typeof ADOPT_PUPPY;

export interface ActionType {
    type: ReduxType,
    payload: Payload
}

type  SagaType = typeof PUPPIES_GET_REQUEST;

export interface SagaAction {
    type: SagaType,
    payload: Payload
}

