<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="routeTo">
      <div class="layout-logo">
        <div class="logo-text">课程评论系统</div>
      </div>
      <div class="layout-nav">
        <MenuItem name="/teainfo">
        <Icon type="ios-navigate"></Icon>
        个人主页
        </MenuItem>
        <MenuItem name="/check">
        <Icon type="ios-navigate"></Icon>
        录入评价
        </MenuItem>
        <MenuItem name="/see">
        <Icon type="ios-navigate"></Icon>
        动态信息
        </MenuItem>
        <MenuItem name="/selfcenter">
        <Icon type="ios-navigate"></Icon>
        个人中心
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
  },
  methods: {
    routeTo (e) {
      console.log(e)
      this.$router.push(e)
    }
  }
}
</script>
<style scoped>
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 20px;
}
.logo-text {
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
