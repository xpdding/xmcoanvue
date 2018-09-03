import Login from '@/components/LoginReg/Login'
import Reg from '@/components/LoginReg/Reg'
import Logout from '@/components/LoginReg/Logout'

export const RouteOfLoginReg = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  }, {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]
