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
    width: 300px;
    div {
        display: block
    }
    form {
        width: 100%;
        display: block;
    }
    button {
        width: 45%;
        margin: 5px;
    }
`;


const  Puppy:React.FC<APuppy> = props => {
    const { 
        id, 
        name, 
        type, 
        adopted, 
        delete: deletePuppy,
        adopt: adoptPuppy
    } = props;
    
    return(
        <StyledPuppy>
            <div>Name: <Link title={`navigate to ${name}`} to={`/${id}`}>{name}</Link></div>
            <div>Type: {type}</div>
            <div>Adopted: <b>{adopted.toString()}</b></div>
            <form>
                <button 
                    type='button' 
                    className='adopt'
                    onClick={() => adoptPuppy && adoptPuppy(id)}
                >
                    { adopted ? 'Cancel Adoption': 'Adopt' }
                </button>
                <button 
                    type='button'
                    className='delete'
                    onClick={() => deletePuppy && deletePuppy(id)}
                >Delete</button>
            </form>
        </StyledPuppy>
   )
};

export default Puppy;