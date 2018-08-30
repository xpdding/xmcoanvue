<template>
  <div>
     <el-row>
        <el-col :span="20">
          <div class="grid-content" :class="index%2===0?'bg-purple':'bg-purple-light'">
            <span class="pjname-C">{{'>>>'+list.listname}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content" :class="index%2===0?'bg-purple':'bg-purple-light'">
            <el-checkbox v-model="list.listchecked">备选项</el-checkbox>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>{{'ID是:'+list.listid}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span>{{'开始时间:'+list.listft}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>{{'结束时间:'+list.listet}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span>{{'谁做:'+list.listwhodo}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <span>{{'标签:'+list.listtags}}</span>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <span>{{'标※:'+list.listflag}}</span>
          </div>
        </el-col>
      </el-row>
  </div>
</template>
