export interface APuppy {
    id: number;
    name: string;
    type: string;
    adopted: boolean;
}

export type Puppies = Array<APuppy>

export type NewPuppy = APuppy & { id?: number};

export const ADD_PUPPY = 'ADD_PUPPY';

export const ADD_REQUEST = 'ADD_REQUEST';

export const RECEIVED_REQUEST = 'RECEIVED_REQUEST';

export const GET_PUPPIES = 'GET_PUPPIES';
