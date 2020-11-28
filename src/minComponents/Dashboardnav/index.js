import React from 'react'
import {NavLink} from 'react-router-dom'

const Index = () => {
    return (
        <div className='dashboardsidenav'>
            <ul>
                <li><NavLink to='/profile'>My profile</NavLink></li>
                <hr className="divider"/>
                <li><NavLink to='/investment'>All investments</NavLink></li>
                <hr />
                <li><NavLink to='/'>Current investment</NavLink></li>
                <hr />
                <li><NavLink to='/mou'>MOU</NavLink></li>
                <hr />
                <li><NavLink to='/'>Investment Calculator</NavLink></li>
                <hr />
                <li><NavLink to='/practice'>Practice</NavLink></li>
            </ul>
        </div>
    )
}

export default Index