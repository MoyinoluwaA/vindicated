import React from 'react'
import {Collapsible, CollapsibleItem, Icon} from 'react-materialize'

import Button from '../Button/index'

const Index =() => {
    return (
        <div className=" testimonial blue lighten-5" id="testimonial" >
            <h4 className="center-align"> Frequently Asked Questions? (FAQ) </h4>
            <div className="testimonial-body">
                <Collapsible
                accordion
                popout
                >
                    <CollapsibleItem
                        expanded={false}
                        header="How do I start my investment journey?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        Sign Up to start your investment journey with us.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="How much is the minimum and maximum amount that can be invested?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        The minimum amount is &#8358;100,000 and there is no limit to how much you can invest.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="How long is an investment cycle?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        An investment cycle is 5weeks which comprises of 25 working days.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="What does Vindicated Investment invest in?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        The company trades the Money Market, invests in Real Estate, Automobiles and Logistics.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="How safe will my investments be?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        We have a structure in place 
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="How can i contact you?"
                        icon={<i className="fas fa-question"> </i>}
                        node="div"
                    >
                        Click on any of the company contact links and you will be attended to.
                    </CollapsibleItem>
                </Collapsible>
            </div>
            <Button text="View more" className="blue white-text"/>
        </div>
    )
}

export default Index