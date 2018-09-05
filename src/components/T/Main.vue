<template>
  <div class="t">
    <div class="t-1">
    <Row :gutter="10">
      <Col :span="2">
        <div class="grid-content bg-purple">
          <C1></C1>
        </div>
      </Col>
      <Col :span="3">
        <div class="grid-content bg-purple">
          <C2></C2>
        </div>
      </Col>
      <Col :span="3">
        <div class="grid-content bg-purple">
          <C3></C3>
        </div>
      </Col>
      <Col :span="16">
        <div class="grid-content bg-purple">
          <C4></C4>
        </div>
      </Col>
    </Row></div>
  </div>
</template>
<script>
import C1 from '@/components/C1/C1'
import C2 from '@/components/C2/C2'
import C3 from '@/components/C3/C3'
import C4 from '@/components/C4/C4'
export default {
  components: {
    C1,
    C2,
    C3,
    C4
  },
  name: 'Main'
}
</script>
<style scoped>
.el-row {
  /* margin: 0 auto; */
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ffe1aa;
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
.t{
  text-align: center;
  padding:10px 10px;
  border: 1px solid red;
}
/* .t-1{
  border: 1px solid green;
} */
</style>
