import React from 'react';
import {Button} from 'react-materialize';

const Index = (props) => {
    const {text, className} = (props)
    return(
        <Button
            node="button"
            waves="light"
            className={className}
        >
            {text}
        </Button>
    )
};

export default Index;