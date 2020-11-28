import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/index'
import Dashboardnav from '../Dashboardnav/index'
import Input from '../../Components/TextInput'
import Button from '../../Components/Button'
import {auth, firestore} from '../../config/firebase'
import {useHistory} from 'react-router-dom'
import {Row,Col} from 'react-materialize'

function Index () {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const history = useHistory()
    const uid = localStorage.getItem('uid')

    useEffect (()=> {
        if (!uid) {
            history.push('/')
        }
    },[uid, history])


    useEffect(()=>{
        const fetchedData =  async ()=>{
            const data = await firestore.collection('users').get();
            data.forEach((doc)=>{
                if (doc.id === uid){
                    setFirstname(doc.data().firstname)
                    setLastname(doc.data().lastname)
                    setEmail(doc.data().email)
                }
            })
        }
        fetchedData()
    },[uid])

     // To update state with what users fill
    const handleChange = (e) => {
        const {name,value}= e.currentTarget;
        if(name === 'firstname'){
            setFirstname(value);
        } else if (name === 'lastname'){
            setLastname(value);
        } else if (name === 'email'){
            setEmail(value);
        } else if (name === 'phone'){
            setPhone(value);
        }
    }

    const handleSubmit= (e)=> {
        e.preventDefault()
        const user = firestore.collection('users').doc(uid)
        user.update({
            firstname,
            phoneNumber:phone
        })
    }

    return (
        <div>
            <Navbar  />
            <div>
                <Row>
                    <Col className="navsidebar blue darken-4" m={2} >
                    <Dashboardnav />
                    </Col>
                    <Col m={10} >
                    <div>
                        <h2>Profile Page</h2>
                        <form onSubmit={handleSubmit}>
                            <div >
                                <Input 
                                    type="text"
                                    label="Firstname"
                                    name="firstname"
                                    value={firstname}
                                    handleChange={handleChange}
                                />
                                <Input 
                                    type="text"
                                    label="Lastname"
                                    name="lastname"
                                    value={lastname}
                                    handleChange={handleChange}
                                />
                                <Input 
                                    placeholder="Enter Email Address"
                                    type="email"
                                    label="Email address"
                                    name="email"
                                    value={email}
                                    handleChange={handleChange}
                                />
                                <Input 
                                    placeholder="Enter Phone Number"
                                    type="tel"
                                    label="Phone Number"
                                    name="phone"
                                    value={phone}
                                    handleChange={handleChange}
                                />
                                
                                <Button text="Update Profile" className=" blue darken-4" />
                            </div>
                        </form>
                    </div>
                    
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Index