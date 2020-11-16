import React from 'react';
import {Row, Col} from 'react-materialize';

import Card from '../Card/index'

const Index= () => {
    return (
        <div className="blue lighten-5" id="investment-plans">
            <h4 className="Plan-heading center-align"> Our Investment Plans</h4>
            <Row className="Plans">
                <Col m={4} s={12} >
                    <Card>
                        <h5 className="center-align">Flex Plans</h5>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        </p>
                    </Card>
                </Col>
                <Col m={4} s={12}>
                    <Card>
                        <h5 className="center-align">Medium Plans</h5>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        </p>
                    </Card>
                </Col>
                <Col m={4} s={12}>
                    <Card>
                        <h5 className="center-align">Cummulative Plans</h5>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                        </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default Index;