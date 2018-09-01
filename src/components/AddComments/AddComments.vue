<template>
  <div>
    AddComments
    <Row>
      <Col span="24">我是：</Col>
      <Col span="24">此次评论的课程是：课程所在的时间是：</Col>
      <Col span="24">下面是我的学生，本门课程的：</Col>
      <Col span="24">学生们：。。。</Col>
    </Row>
    <Row>
      <Col span="4">能力1</Col>
      <Col span="4">显示10个btn</Col>
      <Col span="4">显示一个input</Col>
    </Row>
    <Row>
      <Col span="4">能力6</Col>
      <Col span="4">显示10个btn</Col>
      <Col span="4">显示一个input</Col>
    </Row>
    <Row>
      <Col span="24">评论：</Col>
      <Col span="24">
      <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..." />
      </Col>
    </Row>

    <Row>
      <Col span="24">下面显示的是几个生成的评论：</Col>
      <Col span="24">评论。。3X3</Col>
    </Row>
    <Row>
      <Button type="warning" @click="handleSubmit">确认后将检测数据信息正确性并提交项目</Button>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'AddComments'
}
</script>
<style scoped>
</style>
