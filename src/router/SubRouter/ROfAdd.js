import AddTea from '@/components/AddItems/AddTea'
import AddStu from '@/components/AddItems/AddStu'
import AddCo from '@/components/AddItems/AddCo'
import StuToCo from '@/components/TO/StuToCo'

export const ROfAdd = [
  {
    path: '/addtea',
    name: 'AddTea',
    component: AddTea
  },
  {
    path: '/addco',
    name: 'AddCo',
    component: AddCo
  },
  {
    path: '/addstu',
    name: 'AddStu',
    component: AddStu
  },
  {
    path: '/stutoco',
    name: 'StuToCo',
    component: StuToCo
  }
]
