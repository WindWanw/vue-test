import route from './route-lazy.js'

const asyRoute = [{
    path: '/home',
    name: 'home',
    component: route.notFound,
    meta: {
        parent: '',
        name: '首页',
        iconfont: 'iconfont iconhome_icon',
        needLogin: true,
    },
    children: []
}, ];


export default asyRoute;