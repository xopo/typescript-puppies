import React, { useState } from 'react';
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

const AddForm: React.FC = () => {
    const [name, nameChange] = useState('test name');
    const [type, typeChange] = useState('ty');
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
            <input type="submit" name="submit" value="Add puppy"/>
        </StyledForm>
    );
};

export default AddForm;
