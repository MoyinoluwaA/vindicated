import React from 'react';
import {NavLink} from 'react-router-dom' 
import Input from '../TextInput/index';
import Button from '../Button/index';

const Index = () => {
    return (
        <form>
            <div className="register">
            <NavLink to="/" className="register-title">Vindicated Investment</NavLink>
                <Input 
                    placeholder="Enter Fullname"
                    type="text"
                    label="Fullname"
                />
                <Input 
                    placeholder="Enter Email Address"
                    type="email"
                    label="Email address"
                />
                <Input 
                    placeholder="Enter password"
                    type="password"
                    label="Password"
                />
                <Button text="Register" className="buttonForm blue darken-4"/>
                <p className="center-align">Already have an account? <a href="/login">Log in</a></p>
            </div>
        </form>
    )
};

export default Index;