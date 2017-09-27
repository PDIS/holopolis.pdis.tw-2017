import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import timeline from '@/components/timeline'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
