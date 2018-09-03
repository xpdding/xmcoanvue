<template>
  <div>
    <div>
      <div>
        <div style="display:flex;margin:10px;line-height:20px;" v-for="(list,index) in InOutData.data126" :key="list[0]">
          <el-button type="primary">{{list[0]}}{{index}}</el-button>
          <el-input v-model="list[2]" placeholder="请输入数值" style="width:30%;"></el-input>
        </div>
      </div>
      <div style="display:flex;margin:10px;">
        <el-button type="danger">校验数据</el-button>
        <el-button type="danger">一键填入</el-button>
        <el-button type="danger" @click="handleGoData">点我提交</el-button>
      </div>
    </div>
    <p>{{inType}}{{inMonth}}{{inName}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AddQdData',
  props: ['inName', 'inType', 'inMonth'],
  data () {
    return {
      input: 0,
      InOutData: {
        datayear: '',
        datamonth: '',
        datatype: '',
        data126: [
          ['南京', '全渠道', 0],
          ['苏州', '全渠道', 0],
          ['南通', '全渠道', 0],
          ['扬州', '全渠道', 0],
          ['常州', '全渠道', 0],
          ['无锡', '全渠道', 0],
          ['徐州', '全渠道', 0],
          ['盐城', '全渠道', 0],
          ['泰州', '全渠道', 0],
          ['镇江', '全渠道', 0],
          ['淮安', '全渠道', 0],
          ['宿迁', '全渠道', 0],
          ['连云港', '全渠道', 0]
        ],
        whoin: ''
      }
    }
  },
  methods: {
    handleGoData () {
      this.InOutData.whoin = this.inName
      this.InOutData.datayear = this.inMonth.getFullYear()
      this.InOutData.datamonth = this.inMonth.getMonth()
      this.InOutData.datatype = this.inType
      let params = this.InOutData
      console.log('-----------------')
      console.log(this.InOutData)
      console.log(params)
      axios.post('/api/PostAndUpdateDataOfBigJS', params).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
    }
  }
}
</script>
<style scoped>
.cell {
  max-height: 24px !important;
  overflow: auto !important;
}
</style>
