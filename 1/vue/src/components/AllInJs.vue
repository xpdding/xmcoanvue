<template>
  <div>

    <div>
      <el-row style="line-height:20%">
        <el-col :span="4">
          <div>
            <el-select v-model="injigou" placeholder="请选择机构" width="100%">
              <el-option v-for="item in jigou" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <el-select v-model="inqudao" placeholder="请选择渠道">
              <el-option v-for="item in qudao" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <div class="block">
              <el-date-picker v-model="choosedate" type="month" placeholder="选择今年截止的月份">
              </el-date-picker>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          <div>
            <el-button type="primary">确定查询</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-button type="warning">一键查询最新(全机构/全渠道/截止上月)</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr>
    <div class="con-all">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
      <el-row>
        <div>
          <h1>2018年-江苏分公司-业务概览-全省综拓</h1>
        </div>
      </el-row>
      <el-row>
        <div style="font-size:130%;font-weight:bold;padding-left:20%;text-align:left;color:red;padding-bottom:10px;">
          年度业务时序：60%
        </div>
      </el-row>
      <el-row>
        <table border="1px red" style="margin:0 auto">
          <thead>
            <tr>
              <td>板块
              </td>
              <td>业务类型
              </td>
              <td>累进达成
              </td>
              <td>全年任务
              </td>
              <td>达成率
              </td>
              <td>差额
              </td>
              <td>17累进同期
              </td>
              <td>同比
              </td>
              <td>达成率排名
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="6" class="lie01">
                <p>BBC</p>
                <p>板块</p>
              </td>
              <td class="lie02">{{liename[0]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td rowspan="2"></td>
              <td rowspan="2"></td>
              <td rowspan="2"></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[1]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[2]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie021">{{liename[3]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie021">{{liename[4]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie021">{{liename[5]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3" class="lie01">
                <p>员福</p>
                <p>板块</p>
              </td>
              <td class="lie02">{{liename[6]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[7]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[8]}}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4" class="lie01">
                <p>年金</p>
                <p>板块</p>
              </td>
              <td class="lie02">{{liename[9]}}</td>
              <td></td>
              <td rowspan="4" class="lie01-dajiankang">
                <p>★★★</p>
                <p>大健康</p>
                <p>板块</p>
              </td>
              <td rowspan="4"></td>
              <td rowspan="2"></td>
              <td rowspan="2"></td>
              <td rowspan="4" colspan="2"></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[10]}}</td>
              <td></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[11]}}</td>
              <td></td>
              <td rowspan="2"></td>
              <td rowspan="2"></td>
            </tr>
            <tr>
              <td class="lie02">{{liename[12]}}</td>
              <td></td>
            </tr>
            <tr>
              <td class="lie01">
                <p>排名</p>
              </td>
              <td class="lie02">{{liename[13]}}</td>
              <td colspan="2"></td>
              <td></td>
              <td></td>
              <td colspan="3"></td>
            </tr>
          </tbody>
        </table>
      </el-row>
      <el-row>
        <div>
          <p style="font-weight:bold;text-align:right;padding-right:10%;">数据统计截止日期:2018-7-31 单位：万元、件数 数据来源：BBC部、年金部、办公室</p>
        </div>
      </el-row>
    </div>

  </div>
</template>
<script>
import Header from '@/components/BASE/Header'
import LeftSide from '@/components/BASE/LeftSide'
import MokeData from '../../Moke/Mokes.js'
export default {
  name: 'AllInJs',
  components: {
    Header,
    LeftSide
  },
  data () {
    return {
      choosedate: '2018-06',
      jigou: [],
      injigou: '',
      qudao: [],
      inqudao: '',
      liename: []
    }
  },
  mounted () {
    console.log(MokeData)
    this.jigou = MokeData.GetDataJigou().jigou
    this.injigou = MokeData.GetDataJigou().injigou
    this.qudao = MokeData.GetDataQudao().qudao
    this.inqudao = MokeData.GetDataQudao().inqudao
    this.liename = MokeData.GetDataLiename().liename
    console.log(this.jigou)
  }
}
</script>
<style scoped>
td {
  height: 40px;
  width: 140px;
  /* background-color: red; */
}
table {
  border: 3px solid black;
  border-collapse: collapse;
  background-color: white;
}
thead {
  font-weight: bold;
  background-color: darkcyan;
  color: white;
  font-size: 120%;
  border: 2px solid black;
}
.lie01 {
  font-weight: bold;
  font-size: 150%;
}
.lie01-dajiankang {
  font-weight: bold;
  font-size: 150%;
  color: rgba(255, 0, 0, 0.8);
}
.lie02 {
  color: rgba(255, 0, 0, 0.8);
  font-size: 100%;
  font-weight: bold;
  text-align: left;
  padding-left: 8px;
}
.lie021 {
  color: gray;
  font-size: 100%;
  font-style: italic;
  text-align: right;
  padding-right: 8px;
}
h1 {
  font-size: 200%;
}
</style>
