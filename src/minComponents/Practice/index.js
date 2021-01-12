import React, {useState} from 'react'
import Navbar from '../Navbar/index'
import Input from '../../Components/TextInput'
import Button from '../../Components/Button'
import { firestore } from '../../config/firebase'

const Index = ()=> {
    const [name,setName]=useState('')
    const [testimonial,setTestimonial]=useState('')

    const handleChange = (e) => {
        const {name,value}= e.currentTarget
        if (name === 'name'){
            setName(value)
        } else if (name === 'testimonial'){
            setTestimonial(value)
        }
    }

    const uid = localStorage.getItem('uid')
    
    
    const handleAdd = (e)=> {
        e.preventDefault()
        const testimonialList = []
        const data= firestore.collection('testimonial').add({
            uid,
            name,
            testimonial
        })
        testimonialList.push(data)
        console.log('Testimonial added')
    }
    

    return (
        <div>
            <Navbar />
            <h1 id="welcome-dashboard">Welcome to your dashboard</h1>
            <form id="testimonial-input">
                <Input 
                    placeholder="Enter name"
                    type="text"
                    label="Name"
                    name="name"
                    value={name}
                    handleChange={handleChange}
                />
                <Input 
                    placeholder="Enter Testimonial"
                    type="text"
                    label="Testimonial"
                    name="testimonial"
                    value={testimonial}
                    handleChange={handleChange}
                />
                    
                <Button text="Add" className="buttonForm blue darken-4" handleClick={handleAdd} />
                    
            </form>
        </div>
    )
}

export default Index