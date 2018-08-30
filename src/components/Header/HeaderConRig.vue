<template>
  <div>
    <h1>我是：{{getCurrName}}---</h1>
    <h3>{{getCurrInfo}}</h3>
  </div>
</template>
<script>
export default {
  name: 'HeaderConRig',
  data () {
    return {

    }
  },
  computed: {
    getCurrName () {
      // console.log(this.$store.getters.getUserWhoLogin())
      return this.$store.state.uinfo.uname
    },
    getCurrInfo () {
      return this.$store.state.uinfo
    }
  }
}
</script>
<style scoped>

</style>
