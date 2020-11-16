import React from 'react';
import {Footer, Icon} from 'react-materialize'

const Index = () => {
    return (
        <Footer
        className="example blue darken-4"
        copyrights="&#169; 2020 Vindicated Investment"
        links={
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!"><Icon>mail</Icon>vindicatedinvestment@gmail.com</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><Icon>call</Icon><span>&#43;</span>234-907-882-5015</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><Icon>location_on</Icon>Abeokuta, Ogun State, Nigeria</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><Icon>call</Icon>More Links</a></li>
            </ul>
        }
        moreLinks={
            <ul>
                <li><a className="grey-text text-lighten-4 right" href="#!">
                Connect with us<br/>
                <img src="/whatsapp1.png" alt="whatsapp logo" />
                </a>
                </li>
            </ul>
        }
        >
            <h5 className="white-text">
                Footer Content
            </h5>
            <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer content.
            </p>
        </Footer>
    )
};

export default Index;