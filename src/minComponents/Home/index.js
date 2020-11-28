import React, {useEffect} from 'react'
import Navbar from '../Navbar/index'
import Dashboardnav from '../Dashboardnav/index'

import {useHistory} from 'react-router-dom'
import {Row,Col} from 'react-materialize'

function Index () {

    const history = useHistory()
    const uid = localStorage.getItem('uid')

    useEffect (()=> {
        if (!uid) {
            history.push('/')
        }
    },[uid, history])

    return (
        <div>
            <Navbar  />
            <div>
                <Row>
                    <Col className="navsidebar blue darken-4" m={2} >
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