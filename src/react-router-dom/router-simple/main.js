import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginComponent from './Login'
import RegisterComponent from './Register'
import HomeComponent from './Home'

export default class MainComponents extends React.Component {
    componentWillMount () {
        console.log("main: componentWillMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("main: componentWillReceiveProps");
    }

    componentDidUpdate () {
        console.log("main: componentDidUpdate");
    }

    render () {
        let {location: {pathname}} = this.props

        console.log("main: render() ", "pathname: ", pathname);

        //if (route) return <Redirect to={route.redirect}/>

        return (
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterComponent}/>
            </Switch>
        )
    }
}
