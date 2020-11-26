import React from 'react';
import 'materialize-css';
import {Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom';

const Index= () =>{
    return(
        <Navbar
        alignLinks="right"
        brand={<a  href="/"><img src="/logo.png" alt="logo" className="brand-logo" /></a>}
        id="mobile-nav"
        menuIcon={<Icon className="blue-text">menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
        fixed="true"
        className="white z-depth-0"
        >
    
            <NavLink to="/" className="black-text link">
                Home
            </NavLink>
            <a href="#about" className="black-text link">
                About
            </a>
            <a href="#investment-plans" className="black-text link">
                Plans
            </a>
            <a href="#testimonial" className="black-text link">
                Testimonial
            </a>
            <NavLink to="/login" className="black-text link">
                Login
            </NavLink>
            <NavLink to="/register" className="black-text link">
                Register
            </NavLink>
        </Navbar>
    )
};

export default Index;