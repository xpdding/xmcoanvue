<template>
  <div>
    <div>
      <el-button type="primary" @click="handleDataAndSetOp">点我渲染数据</el-button>
    </div>
    <div id='mychart01' :style="{width: '800px', height: '600px'}"></div>
    <div id='mychart02' :style="{width: '800px', height: '600px'}"></div>
    <div id='mychart03' :style="{width: '800px', height: '600px'}"></div>
    <div id='mychart04' :style="{width: '800px', height: '600px'}"></div>
  </div>
</template>
<script>
import MokeData from '../../Moke/Mokes.js'
export default {
  name: 'InMain',

  data () {
    return {
      msg: '1'
    }
  },
  methods: {
    handleDataAndSetOp () {
      console.log('mounted')
      let Data01 = MokeData.GetData01()
      console.log(Data01)
      setTimeout(() => {
        let myChart01 = this.$echarts.init(
          document.getElementById('mychart01')
        )
        myChart01.setOption(Data01)
      }, 1000)

      //
      let Data02 = MokeData.GetData02()
      console.log(Data02)
      let myChart02 = this.$echarts.init(document.getElementById('mychart02'))
      myChart02.setOption(Data02)
      //
      let Data03 = MokeData.GetData03()
      console.log(Data03)
      let myChart03 = this.$echarts.init(document.getElementById('mychart03'))
      myChart03.setOption(Data03)
      //
      let Data04 = MokeData.GetData04()
      console.log(Data04)
      let myChart04 = this.$echarts.init(document.getElementById('mychart04'))
      myChart04.title = 'ssss'
      myChart04.setOption(Data04)
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style scoped>
</style>
