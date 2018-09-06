<template>
  <div>
    {{mycos}}
    <Tabs @on-click="handleChoTab" >
      <TabPane v-for="co of mycos" :key="co.tid" :label="co.coname" :name="co.tid">
        <div>
          <SubRAV></SubRAV>
        </div>
      </TabPane>
    </Tabs>

  </div>
</template>
<script>
import axios from 'axios'
import SubRAV from './SubRAV'
export default {
  components: {
    SubRAV
  },
  name: 'RatingView',
  data () {
    return {
      mycos: [],
      tabValue: 'ww'
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
          this.mycos = data
          // data.forEach(e => {
          //   this.mycos.push(e.coname)
          // })
        }
      })
    },
    handleChoTab (e) {
      this.tabValue = e
    }
  },
  mounted () {
    this.getCosByTea()
  }
}
</script>
<style scoped>
</style>
