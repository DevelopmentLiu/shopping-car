import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'index',
      redirect:'/home',
      component: Index,
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: '/service',
          name: 'service',
          component: () => import('./views/Service.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('./views/Order.vue')
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('./views/Member.vue')
        },
      ]
    },


  ]
})
