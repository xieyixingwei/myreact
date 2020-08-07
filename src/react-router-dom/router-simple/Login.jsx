import React from 'react'
import {Redirect} from 'react-router-dom'


export default class Login extends React.Component {
    render () {
        return (
            <>
                <h3>Login</h3>
                <p>username: <input/></p>
                <p>password:<input/></p>
                <button>confirm</button>
            </>
        )
    }
}
