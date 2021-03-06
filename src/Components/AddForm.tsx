import React, { useState, MouseEvent } from 'react';
import { addPuppy } from '../Store/Actions/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledForm = styled.form`
    width: 300px; 
    margin: 0 auto;
    text-align: left;
    label {
        display: flex;
        margin-top: 5px;
        padding: 5px;
        line-height: 2;
        input[type=text] {
            margin-left: auto;
        }
    }
    input[type=submit] {
        margin:0 0 0 auto;
        width: 175px;
        margin-top: 5px;
        display: block;
    }
`;

interface AddFormProps {
    addPuppy: typeof addPuppy
}

const AddForm: React.FC<AddFormProps> = (props) => {
    const [name, nameChange] = useState('');
    const [type, typeChange] = useState('');

    const clickMe = (e: MouseEvent, name:string, type: string): void => {
        e.preventDefault();
        e.stopPropagation();
        const newPup = {
            name, 
            type
        };
        props.addPuppy(newPup);
        nameChange('');
        typeChange('');
    }

    return (
        <StyledForm>
            <label>
                Name: 
                <input 
                    type="text" 
                    name="Name" 
                    value={name} 
                    onChange={(e) => nameChange(e.target.value)} 
                />
            </label>
            <label>
                Type: 
                <input 
                    type="text" 
                    name="Type" 
                    value={type}
                    onChange={(e) => typeChange(e.target.value)} 
                />
            </label>
            <input 
                type="button" 
                name="submit" 
                disabled={ disableButton(name, type) }
                onClick={ (e) => clickMe(e, name, type) }
                value="Add puppy"/>
        </StyledForm>
    );
};

const disableButton = (name:string, type:string):boolean|undefined => {
    return Boolean(name.trim().length < 2 || type.trim().length < 3); 
}



export default connect(null, { addPuppy })(AddForm);
