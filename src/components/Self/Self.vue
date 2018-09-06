<template>
  <div>
    <Row>
      <Col span="24">
          <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">我的个人信息：</p>
            <p>我的姓名是：{{teaname}}</p>
            <p>我的课程有：{{mycos}}</p>
        </Card>
    </div>
      </Col>
    </Row>
    <Row>
      <div v-for="stus in stusOfEachCo" :key="stus.coname">
      <Col span="24">课程{{stus.coname}}我的学生有：</Col>
      <Col span="24">
      <div v-for="n in stus.stus" :key="n.tid">
      <Col span="2">
      {{n.stuname}}
      </Col>
      </div>
      </Col>
      </div>
    </Row>
    <Row>
      <Col span="24">我最近上过的课程有，及是否评价过：</Col>
      <Col span="24">。。。</Col>
    </Row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Self',
  data () {
    return {
      teaname: '',
      mycos: [],
      stusOfEachCo: []
    }
  },
  methods: {
    getCosByTea () {
      let pa = {
        teaname: this.$store.state.teainfo.teaname,
        teatid: this.$store.state.teainfo.teatid
      }
      axios.post('/api/getCosByTea', pa).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
          let data = res.data.data
          console.log(data)
          data.forEach(e => {
            this.mycos.push(e.coname)
          })
        }
      })
    },
    getStusOfEachCo () {
      let pa = {
        teaname: this.$store.state.teainfo.teaname,
        teatid: this.$store.state.teainfo.teatid
      }
      axios.post('/api/getStusOfEachCo', pa).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res.data.data)
          this.stusOfEachCo = res.data.data
        }
      })
    }
  },
  mounted () {
    this.teaname = this.$store.state.teainfo.teaname
    this.getCosByTea()
    this.getStusOfEachCo()
  }
}
</script>
<style scoped>
</style>
