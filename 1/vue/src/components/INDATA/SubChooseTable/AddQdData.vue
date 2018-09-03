<template>
  <div>
    <div>
      <div style="display:flex;margin:10px;line-height:100%;">
        <el-button type="primary">直销：</el-button>
        <el-input v-model="InOutData.data126[0][2]" placeholder="请输入数值" style="width:30%;"></el-input>
      </div>
      <div style="display:flex;margin:10px;line-height:100%;">
        <el-button type="primary">银行：</el-button>
        <el-input v-model="InOutData.data126[1][2]" placeholder="请输入数值" style="width:30%;"></el-input>
      </div>
      <div style="display:flex;margin:10px;line-height:100%;">
        <el-button type="primary">中介：</el-button>
        <el-input v-model="InOutData.data126[2][2]" placeholder="请输入数值" style="width:30%;"></el-input>
      </div>
      <div style="display:flex;margin:10px;line-height:100%;">
        <el-button type="primary">综拓：</el-button>
        <el-input v-model="InOutData.data126[3][2]" placeholder="请输入数值" style="width:30%;"></el-input>
      </div>
      <div style="display:flex;margin:10px;">
        <el-button type="danger">校验数据</el-button>
        <el-button type="danger">一键填入</el-button>
        <el-button type="danger" @click="handleGoData">点我提交</el-button>
        <p>{{inType}}{{inMonth}}{{inName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AddQdData',
  props: ['inName', 'inType', 'inMonth'],
  data () {
    return {
      InOutData: {
        datayear: '',
        datamonth: '',
        datatype: '',
        data126: [
          ['全机构', '直销', 2],
          ['全机构', '银行', 0],
          ['全机构', '中介', 0],
          ['全机构', '综拓', 0]
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
      console.log(this.InOutData.datayear, this.InOutData.datamonth)
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
</style>
