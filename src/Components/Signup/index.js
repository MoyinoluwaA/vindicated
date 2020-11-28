import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';


import Input from '../TextInput/index';
import Button from '../Button/index';

import {auth, firestore, provider} from '../../config/firebase';


const Index = () => {
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()


    // To update state with what users fill
    const handleChange = (e) => {
        const {name,value}= e.currentTarget;
        if(name === 'firstname'){
            setFirstname(value);
        } else if (name === 'lastname'){
            setLastname(value);
        } else if (name === 'email'){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value)
        }
    }

    // To prevent error messages from showing while typing to correct error
    const handleKeyUp = () => {
        setErrorMessage('')
    }

    // To allow sign up with google on button
    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            const {user} = await auth.signInWithPopup(provider);
            console.log (user)
            const profile = firestore.collection('users').doc(user.uid)
            await profile.set({
                fullname: user.displayName,
                email: user.email
            })
            const firstname = user.displayName.split(' ')
            console.log(firstname[0])
            localStorage.setItem('uid', user.uid)
            history.push('/login')
        } catch {

        }
    }

    // To allow sign up by filling input fields
    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            if (!firstname || !lastname || !password || !email){
                setErrorMessage ('All fields are required')
            }
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            if (user){
                const profile = firestore.collection('users').doc(user.uid);
                await profile.set({
                    firstname,
                    lastname,
                    email
                })
                localStorage.setItem('uid', user.uid)
                history.push('/login')
            }
            
        } catch (error) {
            if(error.code === 'auth/weak-password'){
                setErrorPassword (error.message)
            } else if (error.code === 'auth/email-already-in-use'){
                setErrorEmail (error.message)
            } else if (error.code === 'auth/invalid-email'){
                setErrorEmail(error.message)
            }
        }
    }

    return (
        <div className="cover">
            <form >
                <div className="register">
                <NavLink  to="/"><img src="/logo.png" alt="logo" className="register-title" /></NavLink>
                    {errorMessage ? <p className="errorMsg center-align red-text">{errorMessage}</p> : ''}
                    <Input 
                        placeholder="Enter First name"
                        type="text"
                        label="Firstname"
                        name="firstname"
                        value={firstname}
                        handleChange={handleChange}
                        handleKeyUp={handleKeyUp}
                    />
                    <Input 
                        placeholder="Enter Last name"
                        type="text"
                        label="Lastname"
                        name="lastname"
                        value={lastname}
                        handleChange={handleChange}
                        handleKeyUp={handleKeyUp}
                    />
                    <Input 
                        placeholder="Enter Email Address"
                        type="email"
                        label="Email address"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        handleKeyUp={handleKeyUp}
                        error={errorEmail}
                    />
                    <Input 
                        placeholder="Enter password"
                        type="password"
                        label="Password"
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        handleKeyUp={handleKeyUp}
                        error={errorPassword}
                    />
                    <Button text="Register" className="buttonForm blue darken-4" handleClick={handleSignup}/>
                    <hr />
                    <p className="center-align">Or</p>
                    <Button className="buttonForm white black-text" handleClick={handleGoogle}>
                    Sign in with Google <i className="fab fa-google"></i>
                    </Button>
                    <p className="center-align">Already have an account? <a href="/login">Log in</a></p>
                </div>
            </form>
        </div>
    )
};

export default Index;