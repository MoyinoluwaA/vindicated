import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom' 
import Input from '../TextInput/index';
import Button from '../Button/index';
import {auth} from '../../config/firebase'

const Index = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory()

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if (name === 'email'){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    }

    const handleKeyUp = () => {
        setErrorMessage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            if (!email || !password){
                setErrorMessage('All fields are required')
            }
            const {user} = await auth.signInWithEmailAndPassword(email, password);
            // To store user data on local storage
            localStorage.setItem('uid', user.uid)
            // To redirect users from login to dashboard when the login button is clicked
            history.push('/dashboard')
        } 
        
        catch(error){
            console.log (error.code)
            console.log (error.message)
            if (error.code === 'auth/user-not-found'){
                setErrorMessage('Invalid email address or password')
            } else if (error.code === 'auth/wrong-password'){
                setErrorMessage('Invalid email address or password')
            } else if (error.code === 'auth/invalid-email'){
                setErrorEmail(error.message)
            }

        }
    }

    return (
        <div className="cover">
            <form onSubmit={handleSubmit}>
                <div className="login">
                <NavLink  to="/"><img src="/logo.png" alt="logo" className="register-title" /></NavLink>
                    {errorMessage ? <p className="errorMsg center-align red-text">{errorMessage}</p> : ''}
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
                    />
                    <Button text="Log in" className="buttonForm blue darken-4"/>
                    <a href='/' className='red-text'>Forgot password</a>
                    <p className="center-align">Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    )
};

export default Index;