<template>
  <div id="app">
    <keep-alive exclude="detail,goodsdetail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/contents/maintabbar/maintabbar'

export default {
  name: 'App',
  components: {
    maintabbar
  },
}
</script>

<style>
  @import "assets/css/base.css";
</style>
