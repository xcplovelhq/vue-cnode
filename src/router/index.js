import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import details from '@/views/details'
import user from '@/views/user'
import recentList from '@/views/recent'
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
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            console.log("a")
           return savedPosition
        } else {
            console.log("ab")
           return { x: 0, y: 200+"px" }
        }
    }
})
