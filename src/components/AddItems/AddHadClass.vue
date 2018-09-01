<template>
  <div>
    <h1>增加已经上过的课程</h1>
    <div>
      <Row>
        <Col span="8">课程名：</Col>
        <Col span="16">
        <Input v-model="submitData.stuname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">上课日期：</Col>
        <Col span="16">
        <Input v-model="submitData.stuwxname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">今天的第几次课：</Col>
        <Col span="16">
        <Input v-model="submitData.stumob" placeholder="请输入名称" style="width: 300px" />
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
  name: 'AddHadClass',
  data () {
    return {
      submitData: {
        stuname: '',
        stuwxname: '',
        stumob: '',
        stuwhoname: '',
        stuwhowxname: '',
        stuwhomob: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      let params = {
        stuname: this.submitData.stuname,
        stuwxname: this.submitData.stuwxname,
        stumob: this.submitData.stumob,
        stuwhoname: this.submitData.stuwhoname,
        stuwhowxname: this.submitData.stuwhowxname,
        stuwhomob: this.submitData.stuwhomob
      }
      console.log(params)
      axios.post('/api/addNewStu', params).then(res => { console.log(res) })
    }
  }
}
</script>
<style scoped>
</style>
