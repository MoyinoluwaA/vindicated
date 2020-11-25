import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';


import Input from '../TextInput/index';
import Button from '../Button/index';

import {auth, firestore, provider} from '../../config/firebase';


const Index = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory()

    const handleChange = (e) => {
        const {name,value}= e.currentTarget;
        if(name === 'fullname'){
            setFullname(value);
        } else if (name === 'email'){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value)
        }
    }

    const handleKeyUp = () => {
        setErrorMessage('')
    }

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
            localStorage.setItem('uid', user.uid)
            history.push('/login')
        } catch {

        }
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            if (!fullname || !password || !email){
                setErrorMessage ('All fields are required')
            }
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            if (user){
                const profile = firestore.collection('users').doc(user.uid);
                await profile.set({
                    fullname,
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
        <form >
            <div className="register">
            <NavLink to="/" className="register-title">Vindicated Investment</NavLink>
                {errorMessage ? <p className="errorMsg center-align red-text">{errorMessage}</p> : ''}
                <Input 
                    placeholder="Enter Fullname"
                    type="text"
                    label="Fullname"
                    name="fullname"
                    value={fullname}
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
    )
};

export default Index;