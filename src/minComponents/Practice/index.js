import React, {useState} from 'react'
import Navbar from '../Navbar/index'
import Input from '../../Components/TextInput'
import Button from '../../Components/Button'
import { firestore } from '../../config/firebase'

const Index = ()=> {
    const [name,setName]=useState('')
    const [counter,setCounter] = useState(0)
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
    const id= localStorage.getItem('id')
    
    const handleAdd = (e)=> {
        e.preventDefault()
        const data= firestore.collection('testimonial').add({
            uid,
            name,
            testimonial
        })
        console.log('Testimonial added')
        const updatedCounter = counter + 1
        setCounter(updatedCounter)
    }
    console.log(counter)

    const handleDelete = (e) => {
        e.preventDefault()
        try {
            const testimonial= firestore.collection('testimonial').doc(' ').delete()
            console.log('testimonial deleted')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <h1>Welcome to your dashboard</h1>
            <form>
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
                <Button text="Delete" className="buttonForm blue darken-4" handleClick={handleDelete} />
                    
            </form>
        </div>
    )
}

export default Index