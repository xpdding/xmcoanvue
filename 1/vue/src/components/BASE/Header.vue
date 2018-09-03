<template>
    <div>
        <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/js">总体概览</el-menu-item>
            <el-submenu index="2">
                <template slot="title">个人中心</template>
                <el-menu-item index="2-1">权限设置</el-menu-item>
                <el-menu-item index="2-2">密码设置</el-menu-item>
                <el-menu-item index="2-3">退出登入</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">其他操作</template>
                    <el-menu-item index="2-4-1">我的留言</el-menu-item>
                    <el-menu-item index="2-4-2">申请权限</el-menu-item>
                    <!-- <el-menu-item index="2-4-3">选项3</el-menu-item> -->
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">自由讨论</el-menu-item>
            <el-submenu index="4">
                <template slot="title">数据录入</template>
                <!-- <el-menu-item index="2-1">BBC</el-menu-item> -->
                <!-- <el-menu-item index="2-2">密码设置</el-menu-item> -->
                <!-- <el-menu-item index="2-3">退出登入</el-menu-item> -->
                <el-submenu index="2-4">
                    <template slot="title">BBC</template>
                    <el-menu-item index="/indata">BBC录入</el-menu-item>
                    <el-menu-item index="/indata">社区单录入</el-menu-item>
                    <el-menu-item index="/indata">大团C录入</el-menu-item>
                </el-submenu>
                <el-submenu index="2-5">
                    <template slot="title">员福</template>
                    <el-menu-item index="/indata">医疗基金</el-menu-item>
                    <el-menu-item index="/indata">非健</el-menu-item>
                    <el-menu-item index="/indata">员福规模</el-menu-item>
                </el-submenu>
                <el-submenu index="2-6">
                    <template slot="title">年金</template>
                    <el-menu-item index="/indata">受托规模</el-menu-item>
                    <el-menu-item index="/indata">单一签约</el-menu-item>
                    <el-menu-item index="/indata">集合到账</el-menu-item>
                    <el-menu-item index="/indata">单一到账</el-menu-item>
                </el-submenu>
                <el-submenu index="2-7">
                    <template slot="title">队伍</template>
                    <el-menu-item index="/indata">月末人数</el-menu-item>
                    <!-- <el-menu-item index="2-4-2">社区单录入</el-menu-item> -->
                    <!-- <el-menu-item index="2-4-3">大团C录入</el-menu-item> -->
                </el-submenu>
            </el-submenu>
            <el-menu-item index="5">
                <a href="https://www.baidu.com" target="_blank">其他链接</a>
            </el-menu-item>
            <el-menu-item index="/login" v-if="loginOutName==='请登录'">{{loginOutName}}</el-menu-item>
            <el-menu-item index="/logout" v-if="loginOutName==='点我退出'">{{loginOutName}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      inDataTypes: {
        BBC录入: 'TP_BBC业务达成'
      },
      //   loginOutName: '请登录',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    loginOutName () {
      if (this.$store.state.uinfo.uname) {
        return '点我退出'
      } else {
        return '请登录'
      }
    }
  },
  methods: {
    handleSelect (key, keyPath, e) {
      console.log(key, keyPath)
      let inType = e.$el.innerText
      console.log(inType)
      this.$store.commit('setyewuIndataType', inType)
      console.log(this.$store.state.yewuIndataType)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
