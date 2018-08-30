import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Vuex from 'vuex'

import {
  ROfAdd
} from './SubRouter/ROfAdd'
import {
  ROfSelf
} from './SubRouter/ROfSelf'

Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  routes: [
    ...ROfAdd, ...ROfSelf,
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
