<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <left-side></left-side>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main style="border:1px blue solid">
          <div>
            <el-row style="line-height:40%">
              <el-button type="success" plain>1月底</el-button>
              <el-button type="success" plain>2月底</el-button>
              <el-button type="success" plain>3月底</el-button>
              <el-button type="success" plain>4月底</el-button>
              <el-button type="success" plain>5月底</el-button>
              <el-button type="success" plain>6月底</el-button>
              <el-button type="success" plain>7月底</el-button>
              <el-button type="success" plain>8月底</el-button>
              <el-button type="success" plain>9月底</el-button>
              <el-button type="success" plain>10月底</el-button>
              <el-button type="success" plain>11月底</el-button>
              <el-button type="success" plain>12月底</el-button>
              <el-button type="success" plain>截止开泰杯</el-button>
              <el-button type="success" plain>截止金泰杯</el-button>
            </el-row>
          </div>
          <hr>
          <div>
            <el-table :data="SeeAllTableData" style="width: 100%">
              <el-table-column prop="机构" label="日期" width="150">
              </el-table-column>
              <el-table-column label="配送信息">
                <el-table-column prop="日达成" label="姓名" width="120" style="background-color:red">
                </el-table-column>
                <!-- <el-table-column label="地址">
                  <el-table-column prop="province" label="省份" width="120">
                  </el-table-column>
                  <el-table-column prop="city" label="市区" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="地址" width="300">
                  </el-table-column>
                  <el-table-column prop="zip" label="邮编" width="120">
                  </el-table-column>
                </el-table-column> -->
              </el-table-column>
            </el-table>
          </div>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/BASE/Header'
import LeftSide from '@/components/BASE/LeftSide'
import MokeData from '../../Moke/Mokes.js'
export default {
  name: 'SeeAll',
  components: {
    Header,
    LeftSide
  },
  data () {
    return {
      SeeAllTableData: [
        {
          机构: '全系统',
          日达成: '507.9437'
        },
        {
          机构: '广东',
          日达成: '63.4232'
        },
        {
          机构: '北京',
          日达成: '22.4701'
        },
        {
          机构: '深圳',
          日达成: '23.1543'
        },
        {
          机构: '山东',
          日达成: '14.4905'
        }
      ]
    }
  },
  methods: {
    handleDataAndSetOp () {
      console.log('handleDataAndSetOp')
      console.log(MokeData)
    }
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
