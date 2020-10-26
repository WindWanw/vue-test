//配置路由相关信息
import Vue from 'vue'

import VueRouter from "vue-router"

//路由和组件之间的应用关系
import routes from "./routes"

//通过Vue.use(插件),安装插件
Vue.use(VueRouter)


//创建VueRouter对象
const router = new VueRouter({
    routes,
    mode: 'history'
});


/**
 * 全局导航守卫
 * 
 * to：     最终
 * from：   从from跳转至to
 * next
 */
router.beforeEach((to, from, next) => {

    //获取缓存中的token
    let token = localStorage.getItem('token');

    document.title=to.meta ? to.meta.name : ''

    //判断跳转的路由是否需要登录
    if (to.meta.isLogin) {
        //如果存在token，则继续
        if (token) {
            next();
        } else {

            //不存在token，表示未登陆，则返回登录页面
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath //如果登录成功，跳转至该路由
                }
            });
        }
    } else {
        next();
    }


});

//导出router对象，传入main.js的vue实例中
export default router;