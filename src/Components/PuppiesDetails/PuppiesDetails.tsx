import React from 'react';
import styled from 'styled-components';
import Puppy from './Puppy';
import { Puppies, APuppy } from '../../Types/Types';
import { deletePuppy, adoptPuppyRequest, getPuppiesRequest } from '../../Store/Actions/actions';
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
    adoptPuppyRequest: typeof adoptPuppyRequest,
    getPuppiesRequest: typeof getPuppiesRequest
}

const PuppiesDetails: React.FC<PuppiesDetailsProps> = (props) => {
    const { puppies } = props;
    if ( !puppies.length ) {
       props.getPuppiesRequest();
    }
    const onDelete = (id: number) => props.deletePuppy(id);
    const onAdopt = (id: number) =>  props.adoptPuppyRequest(id);

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
    puppies: state.puppiesReducer
});

export default connect(mapStateToProps, {
    deletePuppy,
    adoptPuppyRequest,
    getPuppiesRequest,
})(PuppiesDetails);