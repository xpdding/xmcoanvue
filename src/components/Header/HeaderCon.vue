<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <div class="logo-text">OFWEBDEMO</div>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
        <router-link to='/'>
        <Icon type="ios-navigate"></Icon>
        TODOMAIN</router-link>
        </MenuItem>

        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                FN
            </template>
            <MenuGroup title="增加">
                <MenuItem name="3-1">增加项目</MenuItem>
                <MenuItem name="3-2">增加标签</MenuItem>
                <MenuItem name="3-3">增加时间</MenuItem>
            </MenuGroup>
            <!-- <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup> -->
        </Submenu>

        <MenuItem name="2">
        <Icon type="ios-analytics"></Icon>
        个人中心
        </MenuItem>
        <MenuItem name="4">
        <Icon type="ios-paper"></Icon>
        登入/登出
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>
<script>
export default {
  name: 'HeaderCon',
  data () {
    return {}
  }
}
</script>
<style scoped>
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 20px;
}
.logo-text{
  line-height: 100%;
  padding: 10px 2px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #e7b307;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: white;
  /* line-height: 100%; */
}
</style>
