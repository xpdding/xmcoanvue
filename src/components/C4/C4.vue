<template>
  <div>
    <!-- <h1>C4_LISTS</h1> -->
    <div>
      <!-- <Button type="info">Info</Button> -->
      <!-- <Button type="success">Success</Button> -->
      <Button type="warning" style="width:100%;font-size:200%;font-weight:blod;">事件</Button>
      <!-- <Button type="error">Error</Button> -->
    </div>
    <div v-for="(list) in pjlistsdata" :key="list.listid">
      <div>
        <div style="background:#eee;padding: 10px;font-size:100%;">
          <Card :bordered="false">
            <div>
              <Row>
                <Col span="15" style="font-size:200%;">{{'=>>>'+list.listname}}</Col>
                <Col span="3">
                <Checkbox v-model="list.listchecked" style="width:100%;background-color:yellow;"></Checkbox>
                </Col>
                <Col span="3">
                <Button type="warning">修改</Button>
                </Col>
                <Col span="3">
                <Button type="error">删除</Button>
                </Col>
              </Row>
              <Row>
                <Col span="3">开始时间：</Col>
                <Col span="3">{{list.listft}}</Col>
                <Col span="3">结束时间：</Col>
                <Col span="3">{{list.listet}}</Col>
                <Col span="3">标签：</Col>
                <Col span="3">{{list.listtags[0]}}</Col>
                <Col span="3">标🌟：</Col>
                <Col span="3">{{list.listflag}}</Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLISTs } from '../../../Moke/Moke01.js'
export default {
  name: 'C4',
  data () {
    return {
      pjlistsdata: [],
      single: false
    }
  },
  mounted () {
    this.pjlistsdata = getLISTs().data
  }
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
  background: #9aa3ad;
}
.bg-purple-light {
  background: #edeff5;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.pjname-C {
  display: block;
  margin: 0 auto;
  line-height: 100%;
  font-size: 200%;
  font-weight: bold;
  border: 1px solid yellow;
}
</style>
