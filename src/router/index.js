import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import details from '@/views/details'
import user from '@/views/user'
import recentList from '@/views/recent'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
    // mode: "history",
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
        },
        {
            path: '/user/:loginname/topic',
            name: 'topicList',
            component: recentList
        },
        {
            path: '/user/:loginname/replies',
            name: 'repliesList',
            component: recentList
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ],
})
