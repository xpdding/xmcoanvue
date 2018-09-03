<template>
  <div>
    <div>
      <p style="line-height:40%;">现在正在操作的是数据录入页面,下面请选择需要录入的信息</p>
    </div>
    <div class='h-2'>
      <span>录入人：</span>
      <span>{{inName}}</span>
      <span>录入类型：</span>
      <span>{{comInType}}</span>
      <span>选择表类型：</span>
      <div>

        <el-select v-model="chooseTable" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

      </div>
      <span>选择日期：</span>
      <div>
        <el-date-picker v-model="ChooseMonth" type="month" placeholder="点我选择年月份">
        </el-date-picker>
      </div>
      <el-button type="primary" @click="handleEnsureClick">确定并开始录入信息</el-button>
    </div>
    <div>
      <component :is="compName" :inName='inName' :inType='comInType' :inMonth='ChooseMonth'></component>
    </div>
  </div>
</template>
<script>
import AddJgData from '@/components/INDATA/SubChooseTable/AddJgData'
import AddNbqdData from '@/components/INDATA/SubChooseTable/AddNbqdData'
import AddQdData from '@/components/INDATA/SubChooseTable/AddQdData'
export default {
  name: 'InDatas',
  components: { AddJgData, AddNbqdData, AddQdData },
  data () {
    return {
      inName: '',
      inType: '',
      chooseTable: '点我选择表类型',
      ChooseMonth: '',
      compName: '',
      options: [
        {
          value: 'jg',
          label: '全省机构'
        },
        {
          value: 'qd',
          label: '全省渠道'
        },
        {
          value: 'nbqd',
          label: '南京渠道'
        }
      ],
      value: ''
    }
  },
  methods: {
    handleEnsureClick () {
      console.log(this.ChooseMonth)
      if (this.chooseTable === 'jg') {
        this.compName = 'AddJgData'
        // console.log(this.chooseTable)
      } else if (this.chooseTable === 'qd') {
        this.compName = 'AddQdData'
        // console.log(this.chooseTable)
      } else if (this.chooseTable === 'nbqd') {
        this.compName = 'AddNbqdData'
        // console.log(this.chooseTable)
      } else {
        this.compName = ''
        // console.log(this.chooseTable)
      }
    }
  },
  computed: {
    comInType () {
      // this.inType = this.$store.state.yewuIndataType
      return this.$store.state.yewuIndataType
    }
  },
  mounted () {
    this.inName = this.$store.state.uinfo.uname
    this.inType = this.$store.state.yewuIndataType
    console.log('--------------------------')
    console.log(this.$store.state.uinfo.uname)
    console.log(this.inType)
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
.h-2 {
  display: flex;
  line-height: 15px;
  margin-left: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
</style>
