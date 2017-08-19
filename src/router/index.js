import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/page/Welcome'
import About from '@/components/page/About'
import List from '@/components/page/List'
import Make from '@/components/page/Make'
import MakeDone from '@/components/page/MakeDone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/make',
      name: 'Make',
      component: Make
    },
    {
      path: '/make-done',
      name: 'MakeDone',
      component: MakeDone
    }
  ]
})
