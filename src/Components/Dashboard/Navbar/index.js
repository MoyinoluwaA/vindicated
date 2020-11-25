import React, {useState, useEffect} from 'react';
import 'materialize-css';
import {Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom';

import {auth, firestore} from '../../../config/firebase'

const Index= () =>{
    const [user, setUser] = useState();

    // To add name to the welcome on the dashboard page
    useEffect(()=> {
        auth.onAuthStateChanged(async (userData)=> {
            if (userData) {
                const profile = await firestore.collection('users').doc(userData.uid).get()
                if (profile.exists) {
                setUser(profile.data().fullname)
                }
            } else {
                setUser ('')
            }
        })
    })

        // To log out from dashboard navbar
    const handleLogout = () => {
        auth.signOut()
        // To remove uid from localStorage
        localStorage.removeItem('uid')
    }
    return(
        <Navbar
        alignLinks="right"
        brand={<a className="brand-logo black-text" href="/">VINDICATED INVESTMENT</a>}
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
        className="white z-depth-0"
        >
    
            <NavLink to="/" className="black-text" style={{backgroundColor: "transparent"}} >
                Welcome {user} !
            </NavLink>
            <NavLink to="/" className="black-text" onClick={handleLogout} >
                Logout
            </NavLink>
        </Navbar>
    )
};

export default Index;