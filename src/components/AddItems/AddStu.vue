<template>
  <div>
    <h1>增加学生</h1>
    <div>
      <Row>
        <Col span="8">姓名：</Col>
        <Col span="16">
        <Input v-model="submitData.stuname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">微信名：</Col>
        <Col span="16">
        <Input v-model="submitData.stuwxname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">手机号：</Col>
        <Col span="16">
        <Input v-model="submitData.stumob" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
      <Col span="8">家长姓名：</Col>
      <Col span="16">
      <Input v-model="submitData.stuwhoname" placeholder="请输入名称" style="width: 300px" />
      </Col>
      </Row>
      <Row>
        <Col span="8">家长微信名：</Col>
        <Col span="16">
        <Input v-model="submitData.stuwhowxname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">家长手机号：</Col>
        <Col span="16">
        <Input v-model="submitData.stuwhomob" placeholder="请输入名称" style="width: 300px" />
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
  name: 'AddStu',
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
