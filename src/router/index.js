import Vue from 'vue'
import Router from 'vue-router'
// import Main from '@/components/Main'
import Vuex from 'vuex'
// import Moment from 'moment'

import {
  ROfAdd
} from './SubRouter/ROfAdd'
import {
  ROfSelf
} from './SubRouter/ROfSelf'
import {
  ROfMain
} from './SubRouter/ROfMain'

Vue.use(Router)
Vue.use(Vuex)
// Vue.use(Moment)
export default new Router({
  routes: [
    ...ROfAdd, ...ROfSelf, ...ROfMain
  ]
})
