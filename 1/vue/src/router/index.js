import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
// import InMain from '@/components/InMain'
import {
  RouteOfYeWu,
  RouteOfIndata
} from './subRouters/YeWu.js'
import {
  RouteOfLoginReg
} from './subRouters/LoginReg'
import SeeAll from '@/components/SeeAll'
import AllInJs from '@/components/AllInJs'
// import AddQdData from '@/components/INDATA/SubChooseTable/AddJgData'
import OtherLink from '@/components/OtherLink/OtherLink'
// import QuanGuo from '@/components/QuanGuo/QuanGuo'

Vue.prototype.$echarts = echarts
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    ...RouteOfYeWu, ...RouteOfIndata, ...RouteOfLoginReg,
    {
      path: '/otherlink',
      name: 'OtherLink',
      component: OtherLink
    },
    {
      path: '/s',
      name: 'SeeAll',
      component: SeeAll
    },
    {
      path: '/js',
      name: 'AllInJs',
      component: AllInJs
    }
  ]
})
