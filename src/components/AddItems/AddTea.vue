<template>
  <div>
    <h1>增加老师</h1>
    <div>
      <Row>
        <Col span="8">姓名：</Col>
        <Col span="16">
        <Input v-model="submitData.teaname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">微信名：</Col>
        <Col span="16">
        <Input v-model="submitData.teawxname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">手机号：</Col>
        <Col span="16">
        <Input v-model="submitData.teamob" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Button type="warning" @click="handleSubmit">确认后将检测数据信息正确性并提交项目</Button>
      </Row>
    </div>
    <div>
      {{submitData}}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AddTea',
  data () {
    return {
      submitData: {
        teaname: '',
        teawxname: '',
        teamob: ''
      },
      v: 22
    }
  },
  methods: {
    handleSubmit () {
      let params = {
        teaname: this.submitData.teaname,
        teawxname: this.submitData.teawxname,
        teamob: this.submitData.teamob
      }
      console.log(params)
      axios.post('/api/addNewTea', params).then(res => { console.log(res) })
    }
  }
}
</script>
<style scoped>
</style>
