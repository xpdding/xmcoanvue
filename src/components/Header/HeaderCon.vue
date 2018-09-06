<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1" @on-select="routeTo">
      <div class="layout-logo">
        <div class="logo-text">课程评论系统</div>
      </div>
      <div class="layout-nav">
        <MenuItem name="/self">
        <Icon type="md-basket" /> 个人主页
        </MenuItem>

        <MenuItem name="/addcomments">
        <Icon type="ios-cafe" /> 录入评价
        </MenuItem>

        <MenuItem name="/ratingview">
        <Icon type="ios-cafe" /> 评价一览
        </MenuItem>

        <MenuItem name="/see">
        <Icon type="md-swap" /> 动态信息
        </MenuItem>

        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-rose" /> 个人中心
          </template>
          <MenuGroup title="基础菜单">
            <MenuItem name="/reg">协助注册</MenuItem>
            <MenuItem name="/logout">登出系统</MenuItem>
            <MenuItem name="/changese">修改密码</MenuItem>
          </MenuGroup>
                    <MenuGroup title="看些数据">
            <MenuItem name="/reg">从课程看所含学生</MenuItem>
            <MenuItem name="/logout">从学生看所报课程</MenuItem>
            <MenuItem name="/changese">看所有已上课程及评价情况</MenuItem>
          </MenuGroup>
        </Submenu>

        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" /> 录入信息
          </template>
          <MenuGroup title="录入基础信息">
            <MenuItem name="/addtea">管理老师</MenuItem>
            <MenuItem name="/addstu">管理同学</MenuItem>
            <MenuItem name="/addco">管理课程</MenuItem>
          </MenuGroup>
          <MenuGroup title="信息关联">
            <MenuItem name="/stutoco">课程X学生</MenuItem>
          </MenuGroup>
          <MenuGroup title="录入已上课程">
            <MenuItem name="/hadclass">录入已上课程</MenuItem>
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
