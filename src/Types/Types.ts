import { ADD_REQUEST, GET_PUPPIES, ADD_PUPPY, RECEIVED_REQUEST } from './const';
export interface APuppy {
    id: number;
    name: string;
    type: string;
    adopted: boolean;
}

export type Puppies = Array<APuppy>

export type NewPuppy = APuppy & { id?: number};

type Payload = string | Puppies;

export interface ActionType {
    type: typeof ADD_PUPPY | typeof ADD_REQUEST | typeof RECEIVED_REQUEST |  typeof GET_PUPPIES,
    payload: Payload
}


