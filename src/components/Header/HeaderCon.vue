<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="routeTo">
      <div class="layout-logo">
        <div class="logo-text">课程评论系统</div>
      </div>
      <div class="layout-nav">
        <MenuItem name="/teainfo">
        <Icon type="md-basket" /> 个人主页
        </MenuItem>
        <MenuItem name="/check">
        <Icon type="ios-cafe" /> 录入评价
        </MenuItem>
        <MenuItem name="/see">
        <Icon type="md-swap" /> 动态信息
        </MenuItem>
        <MenuItem name="/selfcenter">
        <Icon type="ios-rose" /> 个人中心
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" /> 录入信息
          </template>
          <MenuGroup title="录入基础信息">
            <MenuItem name="/addtea">增加老师</MenuItem>
            <MenuItem name="/addstu">增加同学</MenuItem>
            <MenuItem name="/addco">增加课程</MenuItem>
          </MenuGroup>
          <MenuGroup title="信息关联">
            <MenuItem name="/stutoco">课程X学生</MenuItem>
          </MenuGroup>
        </Submenu>
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
  width: 800px;
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
