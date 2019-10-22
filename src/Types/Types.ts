import { GET_PUPPIES, ADD_PUPPY } from './const';

export interface NewPuppy {
    name: string;
    type: string;
}

export type Puppies = Array<APuppy>

export type APuppy = NewPuppy & { id: number, adopted: boolean};

type Payload = string | Puppies | APuppy | NewPuppy;

export interface ActionType {
    type: typeof ADD_PUPPY | typeof GET_PUPPIES ,
    payload: Payload
}


