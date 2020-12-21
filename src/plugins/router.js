/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Employee from '@/components/Employee'
import Employer from '@/components/Employer'
import Test from '@/components/Test'
import Search from '@/components/Search'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/employee',
      name: 'Employee',
      component: Employee
    }, {
      path: '/employer/:id',
      name: 'Employer',
      component: Employer
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
