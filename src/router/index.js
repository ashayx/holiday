import Vue from 'vue'
import Router from 'vue-router'
import loading from '@/page/loading'
import index from '@/page/index'
import up from '@/page/up'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: loading
    },
    // {
    //   path: '/',
    //   name: 'up',
    //   component: up
    // },
    {
        path: '/index',
        name: 'index',
        component: index
    }
  ]
})
