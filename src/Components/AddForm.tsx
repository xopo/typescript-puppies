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
        input {
            margin-left: auto;
        }
    }
`

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
        </StyledForm>
    );
};

export default AddForm;
