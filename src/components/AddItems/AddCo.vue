<template>
  <div>
    <h1>增加课程信息</h1>
    <div>
      <Row>
        <Col span="8">课程名称：</Col>
        <Col span="16">
        <Input v-model="submitData.coname" placeholder="请输入名称" style="width: 300px" />
        </Col>
      </Row>
      <Row>
        <Col span="8">课程简介：</Col>
        <Col span="16">
        <Input v-model="submitData.cosome" placeholder="请输入名称" style="width: 300px" />
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
  name: 'AddPCo',
  data () {
    return {
      submitData: {
        coname: '',
        cosome: '',
        cotea: '',
        coteatid: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      let params = {
        coname: this.submitData.coname,
        cosome: this.submitData.cosome,
        coteatid: this.submitData.coteatid
      }
      console.log(params)
      axios.post('/api/addNewCo', params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
</style>
