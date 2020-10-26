import route from './route-lazy'

import asyRouter from './route-asy'

//配置路由和组件之间的映射关系
const routes = [{
        path: '',
        redirect: '/login',
        meta: {
            name: "登录"
        }
    },
    {
        path: '/',
        redirect: '/login',
        meta: {
            name: "登录"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: route.login,
        meta: {
            name: "登录"
        }
    }, {
        path: '/notFound',
        name: 'notFound',
        component: route.notFound,
        meta: {
            name: "404"
        }
    }, {
        path: '/layout',
        name: 'layout',
        component: route.layout,
        redirect: '/home',
        children: [
            ...asyRouter
        ],
        meta: {
            name: "首页"
        }
    },
];

export default routes;