import React, {useState, useEffect} from 'react'
import {firestore} from '../../config/firebase'
import {Row, Col, Card, Icon} from 'react-materialize'

const Index= ()=> {
    const [userTestimonial, setUserTestimonial] = useState([])

    const uid = localStorage.getItem('uid')

    useEffect(() => {
        const getTestimonial = async () =>{
            const testimonial = await firestore.collection('testimonial').get()
            const listOfTestimonials= []
            if (testimonial) {
                testimonial.forEach((testimonial)=>{
                    const userTestimonial = {
                        id: testimonial.id,
                        name: testimonial.data().name,
                        testimonial: testimonial.data().testimonial
                    }
                    listOfTestimonials.push(userTestimonial)
                })
                setUserTestimonial(listOfTestimonials)
            }
        }
        getTestimonial()
    },[])

    console.log(userTestimonial.length)

    return (
        <div className=" testimonial blue lighten-5" id="testimonial" >
            <h4 className="center-align"> Testimonials</h4>
            <div className="testimonial-body">
                {userTestimonial.length === 0? (
                    <p>There are no testimonials yet</p>
                ): (
                    <Row>
                {userTestimonial.map((testimonial)=> {
                    return(
                        <div>
                            <Col m={4} s={12}>
                                <Card
                                className="blue-grey darken-1"
                                closeIcon={<Icon>close</Icon>}
                                revealIcon={<Icon>more_vert</Icon>}
                                textClassName="white-text"
                                title={testimonial.name}
                                >
                                {testimonial.testimonial}
                                </Card>
                            </Col>
                        </div>     
                    )
                })}
                </Row>
                )}
                
                
            </div>
        </div>
    )
};

export default Index;
