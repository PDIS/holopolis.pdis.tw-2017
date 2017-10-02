<template>
  <div id="app">
    <headmenu></headmenu>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import headmenu from './components/header.vue'
import foot from './components/footer.vue'
export default {
  name: 'app',
  components: {
    headmenu,
    foot
  }
}
</script>

<!--<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>-->
<style src="./assets/vendor/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/css/flexslider.css"></style>
<style src="./assets/css/animate.css"></style>
<style src="./assets/css/small-business.css"></style>
