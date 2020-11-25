import React from 'react'
import Navbar from '../Navbar/index'
import Dashboardnav from '../Dashboardnav/index'

import {Row,Col} from 'react-materialize'

function Index () {
    return (
        <div>
            <Navbar  />
            <div>
                <Row>
                    <Col className="blue darken-4" m={2} >
                    <Dashboardnav />
                    </Col>
                    <Col m={10} >
                    bla bla bla
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Index