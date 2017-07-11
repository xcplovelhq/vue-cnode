import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import details from '@/views/details'
import user from '@/views/user'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/topic/:id',
            name: 'details',
            component: details
        },
        {
            path: '/user/:loginname',
            name: 'user',
            component: user
        }
    ]
})
