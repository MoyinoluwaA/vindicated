import React from 'react';
import {Footer} from 'react-materialize'

const Index = () => {
    return (
        <Footer
        className="example blue darken-4"
        copyrights="&#169; 2020 Vindicated Investment"
        links={
            <ul> <h5>Contact us </h5>
                <li><a className="grey-text text-lighten-3" href="mailto:vindicatedinvestment@gmail.com?subject=subject text"><i className="fa fa-envelope-o" aria-hidden="true"></i>  vindicatedinvestment@gmail.com</a></li>
                <li><a className="grey-text text-lighten-3" href="https://wa.me/2349078825015" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i>  <span>&#43;</span>234-907-882-5015</a></li>
                <li className="grey-text text-lighten-3"><i className="fa fa-map-marker" aria-hidden="true"></i>  Abeokuta, Ogun State, Nigeria </li>
            </ul>
        }
        >
            
        </Footer>
    )
};

export default Index;

