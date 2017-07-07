import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import details from '@/views/details'

Vue.use(Router)

export default new Router({
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
   }
  ]
})
