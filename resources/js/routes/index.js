import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import routes from './routes'

Vue.use(Router)


let router = new Router(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes: routes
    }
)

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isAuth'] == true) {

            next();

        } else {
            next({ name: 'login' })
        }
    } else {
        next()
    }
})

export default router