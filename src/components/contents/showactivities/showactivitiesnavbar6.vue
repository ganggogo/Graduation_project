<template>
  <div class='showactivitiesnavbar'>
    <div class="left">
      <span class="huoyan"><img :src="huoyanicon" alt=""></span>
      联系我们
    </div>
<!--    <div class="right">-->
<!--      更多-->
<!--      <span class="youicon"><img :src="youicon" alt=""></span>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'showactivitiesnavbar',
    data() {
      return {
        huoyanicon:require('@/assets/imgs/icons/lianxiwomen.svg'),
        youicon:require('@/assets/imgs/icons/you.svg')
      }
    }
  }
</script>

<style scoped>
  .showactivitiesnavbar{
    height: 50px;
    width: 94%;
    display: flex;
    line-height: 50px;
    justify-content: space-between;
    padding:0 3%;
    border-bottom: 2px solid #C9C9C9;
  }

  .huoyan{
    vertical-align: -8px;
  }
  .huoyan img{
    margin-top: 2px;
  }
  .left img{
    width: 35px;
    height: 35px;
  }
  .right{
    color: #bfbfbf;
  }
  .right img{
    width: 22px;
    height: 22px;
  }
  .youicon{
    vertical-align: -4px;
    margin-left: -6px;
  }
</style>