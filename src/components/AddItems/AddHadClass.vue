<template>
  <div>
    <h1>增加已经上过的课程</h1>
    <div>
      <Row>
        <Col span="8">课程名：</Col>
        <Col span="16">
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        </Col>
      </Row>
      <Row>
        <Col span="8">上课日期：</Col>
        <Col span="16">
        <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
      </Row>
      <Row>
        <Col span="8">今天的第几次课：</Col>
        <Col span="16">
        <RadioGroup v-model="phone">
          <Radio label="apple">
            <Icon type="logo-apple"></Icon>
            <span>Apple</span>
          </Radio>
          <Radio label="android">
            <Icon type="logo-android"></Icon>
            <span>Android</span>
          </Radio>
          <Radio label="windows">
            <Icon type="logo-windows"></Icon>
            <span>Windows</span>
          </Radio>
        </RadioGroup>
        <RadioGroup v-model="animal">
          <Radio label="金斑蝶"></Radio>
          <Radio label="爪哇犀牛"></Radio>
          <Radio label="印度黑羚"></Radio>
        </RadioGroup>
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
      axios.post('/api/addNewStu', params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
</style>
