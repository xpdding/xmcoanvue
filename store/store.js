import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    uinfo: {
      uname: '张三丰',
      upass: '123456',
      upass2: '654321',
      inuse: '1',
      tid: 'tid-user-zhangsanfeng',
      id: '52'
    }
  },
  getters: {
    getUserWhoLogin: (state) => {
      console.log('此处显示的是目前登入的uname')
      if (state.uinfo.uname !== '') {
        return state.uinfo.uname
      } else {
        if (window.localStorage.loginUser) {
          console.log('---------这个是在state里面的-----------')
          console.log(window.localStorage.loginUser)
          // state.uinfo.uname = window.localStorage.loginUser
          return window.localStorage.loginUser
        } else {
          console.log('-------你还没有登入，请登入--------')
          // this.$router.push({path: '/login'})
          return false
        }
      }
    }
  },
  mutations: {
    setUinfo (state, uinfo) {
      state.uinfo.uname = uinfo.uname
    },
    delUinfo (state) {
      state.uinfo.uname = ''
      state.uinfo.upass = ''
      console.log('------执行完了，已经删除登入信息------')
    },
    setyewuIndataType (state, IndataType) {
      state.yewuIndataType = IndataType
      console.log('写入类型了')
    }
  },
  actions: {

  }
})

export default store
