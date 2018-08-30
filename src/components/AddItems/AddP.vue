<template>
  <div>
    <h1>AddP</h1>
    <div>
      <Row>
        <Col span="8">目前用户：</Col>
        <Col span="16">{{submitData.usertid}}</Col>
      </Row>
      <Row>
        <Col span="8">项目名称：</Col>
        <Col span="16">
        <Input v-model="submitData.pjname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">项目简介：</Col>
        <Col span="16">
        <Input v-model="submitData.pjsome" type="textarea" :rows="4" placeholder="Enter something..." />
        </Col>
      </Row>
      <Row>
        <Col span="8">预估开始和结束时间：</Col>
        <Col span="16">
        <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px" v-model="submitData.pjtime"></DatePicker>
        </Col>
      </Row>
      <Row>
        <Button type="warning">确认后将检测数据信息正确性并提交项目</Button>
      </Row>
    </div>
    <div>
      {{submitData}}
    </div>
    <br><br><br><br><br><br><br><br><br>{{datavalue}}
  </div>
</template>
<script>
// import { getTAGs } from '../../../Moke/Moke01.js'
export default {
  name: 'AddP',
  data () {
    return {
      submitData: {
        usertid: '',
        pjname: '',
        pjsome: '',
        pjtime: []
      }
    }
  },
  mounted () {
    this.submitData.usertid = this.$store.state.uinfo.tid
  }
}
</script>
<style scoped>

</style>
