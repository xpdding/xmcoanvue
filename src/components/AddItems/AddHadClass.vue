<template>
  <div>
    <h1>增加已经上过的课程</h1>
    <div>
      <Row>
        <Col span="8">课程名：{{cos}}</Col>
        <Col span="16">
        <Select v-model="co" style="width:200px">
          <Option v-for="c in cos" :value="c.tid" :key="c.tid">{{ c.coname }}</Option>
        </Select>
        </Col>
        <div>{{co}}</div>
      </Row>
      <Row>
        <Col span="8">上课日期：{{hadCoDate}}</Col>
        <Col span="16">
        <DatePicker v-model="hadCoDate" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        {{hadCoDate}}
      </Row>
      <Row>
        <Col span="8">今天的第几次课：{{dayTime}}</Col>
        <Col span="16">
        <RadioGroup v-model="dayTime">
          <Radio label="1">1</Radio>
          <Radio label="2">2</Radio>
          <Radio label="3">3</Radio>
          <Radio label="4">4</Radio>
          <Radio label="5">5</Radio>
        </RadioGroup>
        </Col>
        {{dayTime}}
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
// import monent from 'moment'
export default {
  name: 'AddHadClass',
  data () {
    return {
      co: '',
      coname: '',
      dayTime: '',
      cos: [],
      hadCoDate: ''
    }
  },
  computed: {
    submitData () {
      return {
        coname: this.coname,
        conametid: this.co,
        codate: this.hadCoDate,
        cotea: this.$store.state.teainfo.teaname,
        coteatid: this.$store.state.teainfo.teatid,
        cotime: this.dayTime
      }
    }
  },
  methods: {
    handleSubmit () {
      // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
      // this.hadCoDate = moment(this.hadCoDate).format('YYYY-MM-DD HH:mm:ss')
      for (let i = 0; i < this.cos.length; i++) {
        if (this.cos[i].tid === this.co) {
          this.coname = this.cos[i].coname
          console.log(this.coname)
        }
      }
      let params = this.submitData
      console.log(params)
      axios.post('/api/AddHadClass', params).then(res => {
        console.log(res)
      })
    },
    getCos () {
      let params = {
        teatid: this.$store.state.teainfo.teatid
      }
      axios.post('/api/getCos', params).then(res => {
        // console.log(res.data.data)
        let data = res.data.data
        this.cos = data
        console.log(this.cos)
      })
    }
  },
  mounted () {
    this.getCos()
  }
}
</script>
<style scoped>
</style>
