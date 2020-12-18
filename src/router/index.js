import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Juntos from '@/components/Juntos'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/juntos',
      name: 'Juntos',
      component: Juntos
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
