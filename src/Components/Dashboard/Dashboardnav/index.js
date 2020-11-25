import React from 'react'

const Index = () => {
    return (
        <div className='dashboardsidenav'>
            <ul>
                <li><a href='/'>My profile</a></li>
                <hr className="divider"/>
                <li><a href='/'>All investments</a></li>
                <hr />
                <li><a href='/'>Current investment</a></li>
                <hr />
                <li><a href='/'>MOU</a></li>
                <hr />
                <li><a href='/'>Investment Calculator</a></li>
            </ul>
        </div>
    )
}

export default Index