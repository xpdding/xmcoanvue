import Login from '@/components/LoginReg/Login'
import Logout from '@/components/LoginReg/Logout'
import Reg from '@/components/LoginReg/Reg'

export const ROfSelf = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  }
]
