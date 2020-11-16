import React from 'react';
import {TextInput} from 'react-materialize';

const Index = (props) => {
    const {label, placeholder, type} = props;
    return (
        <div>
            <label>{label}</label>
            <TextInput
                placeholder={placeholder}
                type={type}
                inputClassName="browser-default"
            />
        </div>
    )
};

export default Index;