import React from 'react';

import Navbar from '../Navbar/index';
import Herosection from '../Herosection/index';
import About from '../About/index';
import Plans from '../Plans/index';
import Testimonial from '../Testimonial/index';
import Faq from '../FAQ/index'
import Footer from '../Footer/index';


const Index = () => {
    return (
        <div>
            <Navbar />
            <Herosection />
            <About />
            <Plans  />
            <Testimonial />
            <Faq />
            <Footer />
        </div>
    )
}

export default Index;