import InMain from '@/components/InMain'
import InDatas from '@/components/INDATA/InDatas'
import AddQdData from '@/components/INDATA/SubChooseTable/AddQdData'

export const RouteOfYeWu = [{
  path: '/m',
  name: 'InMain',
  component: InMain
}]

export const RouteOfIndata = [{
  path: '/indata',
  name: 'InDatas',
  component: InDatas,
  children: [{
    path: 'addqd',
    name: 'AddQdData',
    component: AddQdData
  }]
}]
