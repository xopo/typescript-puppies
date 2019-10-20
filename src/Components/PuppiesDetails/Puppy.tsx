import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { APuppy } from '../../Types/Types';

const StyledPuppy = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    border: 2px dashed black;
    margin: 5px 5px auto;
    padding: 5px;
    width: 30%;
    div {
        display: block
    }
`;


const  Puppy:React.FC<APuppy> = props => {
    const { id, name, type, adopted } = props;
    return(
        <StyledPuppy>
            <div>Name: <Link title={`navigate to ${name}`} to={`/${id}`}>{name}</Link></div>
            <div>Type: {type}</div>
            <div>Adopted: <b>{adopted}</b></div>
        </StyledPuppy>
   )
};

export default Puppy;