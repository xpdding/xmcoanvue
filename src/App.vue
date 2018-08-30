<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <HeaderCon></HeaderCon>
        </Header>
        <Content :style="{padding: '0 50px'}">
          <Breadcrumb :style="{margin: '20px 0'}">
            <!-- <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem> -->
          </Breadcrumb>
          <Card>
            <div style="min-height: 200px;">
              <router-view/>
            </div>
          </Card>

        </Content>
        <Footer class="layout-footer-center">
          <FooterCon></FooterCon>
        </Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
import HeaderCon from '@/components/Header/HeaderCon'
// import HeaderConRig from '@/components/Header/HeaderConRig'
import FooterCon from '@/components/Footer/FooterCon'
export default {
  name: 'App',
  components: {
    HeaderCon,
    FooterCon
    // HeaderConRig
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
