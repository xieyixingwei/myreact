import React from 'react'
import {Cookie, Local, Session} from './storage'

export default class App extends React.Component {

    componentWillMount () {
        Cookie.set('Auth_Token', 'admin');
        Local.set('react_collapsed', false);
        Session.set('reactTagViews', JSON.stringify({name: "tom", age: 26}))
    }

    render () {
        let authToken = Cookie.get('Auth_Token');
        let a = Local.get('react_collapsed');
        let b = Session.get('reactTagViews');
        return (
            <>
                <h3>Auth_Token: {authToken}</h3>
            </>
        )
    }
}
