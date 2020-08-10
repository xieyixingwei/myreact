import React from 'react'
import {Link} from 'react-router-dom'


export default class Body extends React.Component {
    render () {
        return (
            <>
                <h3>Home</h3>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
                </ul>
            </>
        )
    }
}
