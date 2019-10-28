import React from 'react';
import styled from 'styled-components';
import Puppy from './Puppy';
import { Puppies, APuppy } from '../../Types/Types';
import { deletePuppy, adoptPuppy } from '../../Store/Actions';
import { connect } from 'react-redux';
import { AppState } from '../../Store/Reducers/mainReducer';

const StyledContent = styled.div`
    max-width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0 auto;
    flex-wrap: wrap;
`;

interface PuppiesDetailsProps {
    puppies: Puppies,
    deletePuppy: typeof deletePuppy,
    adoptPuppy: typeof adoptPuppy
}

const PuppiesDetails: React.FC<PuppiesDetailsProps> = (props) => {
    const { puppies } = props;
    const onDelete = (id: number) => props.deletePuppy(id);
    const onAdopt = (id: number) =>  props.adoptPuppy(id);

    return ( 
        <StyledContent>
            { puppies && puppies.map((puppy: APuppy, key: number)=> (
                <Puppy 
                    {...puppy} 
                    key={puppy.id} 
                    delete={onDelete}
                    adopt={onAdopt}
                />) 
            )}
        </StyledContent>
    );
}

const mapStateToProps = (state: AppState) => ({
    puppies: state.puppies
});

export default connect(mapStateToProps, { deletePuppy, adoptPuppy })(PuppiesDetails);