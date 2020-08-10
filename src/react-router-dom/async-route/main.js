import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {allRoutes, asyncRouterMap} from './config'

const isExistPath = (routes, pathname) => routes.some(
    route => {
        if(route.path === pathname) return true;
        if(route.children) return isExistPath(route.children, pathname);
        return false;
    }
);

const getRoute = (routes, pathname) => {
    let fn = routes => routes.map(route => {
        if(route.path === pathname && !route.redirect) return route;
        if(route.children) return fn(route.children).find(v => v);
        return false;
    })

    return fn(routes).find(route => route);
};

const RedirectRoute = (routes, pathname) => routes.find(route => route.path === pathname && route.redirect && route.redirect !== pathname);

const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} />

const renderRouteComponent = routes => routes.map( (route, index) => {
    return route.children ? route.children.map( route => RouteComponent(route) ) : RouteComponent(route)
} );

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
        let {location: {pathname}} = window;

        console.log("main: render() ", "pathname: ", pathname);

        if(!isExistPath(allRoutes, pathname)) return <Redirect to='error/404' />;

        let currRoute = getRoute(allRoutes, pathname);

        let route = RedirectRoute(allRoutes, pathname);
        if (route) return <Redirect to={route.redirect}/>

        document.title = currRoute.name;

        return (
            <HashRouter>
            <Switch>
                {renderRouteComponent(allRoutes)}
            </Switch>
            </HashRouter>
        )
    }
}
