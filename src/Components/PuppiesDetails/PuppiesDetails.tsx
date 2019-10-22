import React from 'react';
import styled from 'styled-components';
import Puppy from './Puppy';
import { Puppies, APuppy } from '../../Types/Types';
import { connect } from 'react-redux';
import { AppState } from '../../Store/Reducers/mainReducer';

const StyledContent = styled.div`
    max-width: 90%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

interface PuppiesDetailsProps {
    puppies: Puppies
}

const PuppiesDetails: React.FC<PuppiesDetailsProps> = (props) => {
    const { puppies } = props;

    return ( 
        <StyledContent>
            { puppies && puppies.map((puppy: APuppy, key: number)=> (
                <Puppy {...puppy} key={key}/>) 
            )}
        </StyledContent>
    );
}

const mapStateToProps = (state: AppState) => ({
    puppies: state.puppies
});



export default connect(mapStateToProps)(PuppiesDetails);