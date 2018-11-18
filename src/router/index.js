/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Employee from '@/components/Employee'
import Employer from '@/components/Employer'
import Test from '@/components/Test'
import SearchJobs from '@/components/SearchJobs'
import SearchEmployer from '@/components/SearchEmployer'
import Profile from '@/components/Profile'
import Map from '@/components/Map'

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
      path: '/employer',
      name: 'Employer',
      component: Employer
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '/searchJobs',
      name: 'SearchJobs',
      component: SearchJobs
    }, {
      path: '/searchEmployer',
      name: 'SearchEmployer',
      component: SearchEmployer
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
