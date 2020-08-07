import React from 'react'
import {Redirect} from 'react-router-dom'


export default class Register extends React.Component {
    render () {
        return (
            <>
                <h3>Register</h3>
                <p>username: <input/></p>
                <p>password:<input/></p>
                <p>2-password:<input/></p>
                <button>ok</button>
                <button>cancel</button>
            </>
        )
    }
}
