import React from 'react';
import {Button} from 'react-materialize';

const Index = (props) => {
    const {text, className, handleClick, children} = (props)
    return(
        <Button
            node="button"
            waves="light"
            className={className}
            onClick={handleClick}
        >
            {text}
            {children}
        </Button>
    )
};

export default Index;