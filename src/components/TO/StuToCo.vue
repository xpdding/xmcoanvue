<template>
  <div>
    <Row>
      <Col span="8">请选择你的课程：</Col>
      <Col span="8">
      <div>
        <Select v-model="co" style="width:200px">
          <Option v-for="c in cos" :value="c.tid" :key="c.tid">{{ c.coname }}</Option>
        </Select>
      </div>
      </Col>
      <Col span="8">下面是你所有的学生，请勾选：</Col>
    </Row>
    <Row>
      <div v-for="s in stus" :key="s.tid">
        <Col span="3">
        <Checkbox v-model="s.isChoose">{{s.stuname}}</Checkbox>
        </Col>
      </div>
    </Row>
    <Row>
      <div>
        你选择的学生有以下名单，请核对：
      </div>
    </Row>
    <Row>
      <div>
        你选择的学生有：
      </div>
      <div>
        <Row>
          <div v-for="s in stus" :key="s.tid">
            <Col span="3">
            <Checkbox v-model="s.isChoose" v-if="s.isChoose">{{s.stuname}}</Checkbox>
            </Col>
          </div>
        </Row>
      </div>
    </Row>
    <Row>
      <Button type="warning" @click="handleSubmit">确认后将提交信息</Button>
    </Row>
    <h3>{{cos}}{{co}}</h3>
    <h2>{{stus[0]}}</h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'StuToCo',
  data () {
    return {
      single: false,
      cos: [],
      co: '',
      stus: []
    }
  },
  computed: {},
  methods: {
    handleSubmit () {
      let pa = {
        cotid: this.co,
        stus: this.stus
      }
      axios.post('/api/postCotostu', pa).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
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
    },
    getStuByTea () {
      let params = {
        teatid: this.$store.state.teainfo.teatid
      }
      axios.post('/api/getStuByTea', params).then(res => {
        // console.log(res.data.data)
        let data = res.data.data
        console.log(data)
        data.forEach(element => {
          element.isChoose = false
        })
        this.stus = data
      })
    }
  },
  mounted () {
    this.getCos()
    this.getStuByTea()
  }
}
</script>
<style scoped>
</style>
