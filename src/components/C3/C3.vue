<template>
  <div>
    <!-- <h1>C3_TAGS</h1> -->
        <div>
    <!-- <Button type="info">Info</Button> -->
    <Button type="success" style="width:100%;font-size:200%;font-weight:blod;">标签</Button>
    <!-- <Button type="warning">Warning</Button> -->
    <!-- <Button type="error">Error</Button> -->
    </div>
    <div v-for="(tag,index) in pjtagsdata" :key="tag">
        <div class="row-01">
          <div class="grid-content" :class="index%2===0?'bg-purple':'bg-purple-light'">
            {{'#'+tag}}
          </div>
        <!-- <el-col :span="24">
          <div class="grid-content bg-purple-light"></div>
        </el-col> -->
      </div>
    </div>
    <div>
      <!-- {{pjdata}} -->
    </div>
  </div>
</template>
<script>
import { getTAGs } from '../../../Moke/Moke01.js'
export default {
  name: 'C3',
  data () {
    return {
      pjtagsdata: []
    }
  },
  mounted () {
    this.pjtagsdata = getTAGs().data
  }
}
</script>
<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #9aa3ad;
}
.bg-purple-light {
  background: #edeff5;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
    line-height: 100%;
  padding: 15px 20px;
  font-weight: bold;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.row-01 {
  /* margin: 10px; */
  /* border: 2px red solid; */
  padding:3px 0px;
  /* line-height: 100%; */
}
</style>
