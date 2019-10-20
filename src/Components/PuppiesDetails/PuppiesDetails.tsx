import React from 'react';
import styled from 'styled-components';
import Puppy from './Puppy';
import { Puppies, APuppy } from '../../Types/Types';

const StyledContent = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

const puppies: Puppies = [{
    name: 'Puppy Test',
    id: 3,
    type: 'type of puppy',
    adopted: true
}, {
    name: 'Puppy Test2',
    id: 4,
    type: 'type of puppy',
    adopted: false
}, {
    name: 'Puppy Test 3',
    id: 5,
    type: 'type of puppy',
    adopted: true
}];

const PuppiesDetails: React.FC = () => {
    return ( 
        <StyledContent>
            { puppies.map((puppy: APuppy, key: number)=> <Puppy {...puppy} key={key}/>) }
        </StyledContent>
    );
}

export default PuppiesDetails;