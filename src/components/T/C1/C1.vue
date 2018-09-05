<template>
  <div>
    <!-- <h1>C1_FN</h1> -->
    <div>
      <!-- <Button type="info">Info</Button> -->
      <!-- <Button type="success">Success</Button> -->
      <!-- <Button type="warning">Warning</Button> -->
      <Button type="error" style="width:100%;font-size:200%;font-weight:blod;">功能</Button>
    </div>
    <div class="t">
      <div>
        <Icon type="md-add-circle" />
        <Icon type="md-folder-open" />
        <Icon type="ios-paper-plane" />
        <Icon type="md-pricetags" />
        <Icon type="md-snow" />
        <Icon type="ios-star" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'C1'
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
  border: 2px solid red;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  /* margin-top: 100px; */
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.t {
  /* display: flex;
  flex-direction: row; */
  font-size: 400%;
  color: darkcyan;
}
</style>
