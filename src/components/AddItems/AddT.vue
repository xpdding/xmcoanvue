<template>
  <div>
    <h1>AddT</h1>
    <div>
      <Row>
        <Col span="8">目前用户：</Col>
        <Col span="16">{{submitData.usertid}}</Col>
      </Row>
      <Row>
        <Col span="8">标签名称：</Col>
        <Col span="16">
        <Input v-model="submitData.tagname" placeholder="请输入名称" style="width: 300px" />
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
  name: 'AddT',
  data () {
    return {
      submitData: {
        usertid: '',
        tagname: ''
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
