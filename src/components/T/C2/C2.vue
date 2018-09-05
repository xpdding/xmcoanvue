<template>
  <div>
    <!-- <h1>C2_PJ</h1> -->
    <div>
    <Button type="info" style="width:100%;font-size:200%;font-weight:blod;">项目</Button>
    <!-- <Button type="success">Success</Button> -->
    <!-- <Button type="warning">Warning</Button> -->
    <!-- <Button type="error">Error</Button> -->
    </div>
    <div v-for="(pj,index) in pjdata" :key="pj.pjid">
      <div class="row-01">
        <div class="grid-content" :class="index%2===0?'bg-purple':'bg-purple-light'">
          {{pj.pjname}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPJs } from '../../../Moke/Moke01.js'
export default {
  name: 'C2',
  data () {
    return {
      pjdata: []
    }
  },
  mounted () {
    this.pjdata = getPJs().data
    console.log(getPJs().data)
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
/* .pjname-C {
  display: block;
  margin: 0 auto;
  line-height: 100%;
  font-size: 100%;
  font-weight: bold;
  border: 1px solid yellow;
} */
.row-01 {
  /* margin: 10px; */
  /* border: 2px red solid; */
  padding:3px 0px;
  /* line-height: 100%; */
}
</style>
