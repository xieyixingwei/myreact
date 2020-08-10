import asyncComponent from './asyncComponent'

const __import_components = file => asyncComponent(() => import(`../router-simple/${file}`));
const __import_views = file => asyncComponent(() => import(`../router-simple/${file}`));

const asyncRouterMapList = [
    {
        path: '/login',
        name: '登陆',
        component: __import_views('Login')
    },
    {
        path: '/register',
        name: '注册',
        component: __import_views('Register')
    }
];

const constantRouterMap = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: __import_views('Home')
    }
];

export const allRoutes = constantRouterMap.concat(asyncRouterMapList);
export const routes = constantRouterMap;
