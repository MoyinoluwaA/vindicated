import React from 'react';
import {NavLink} from 'react-router-dom' 
import Input from '../TextInput/index';
import Button from '../Button/index';

const Index = () => {
    return (
        <form>
            <div className="login">
            <NavLink to="/" className="register-title">Vindicated Investment</NavLink>
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
                <Button text="Log in" className="buttonForm blue darken-4"/>
                <p className="center-align">Don't have an account? <a href="/register">Register</a></p>
            </div>
        </form>
    )
};

export default Index;