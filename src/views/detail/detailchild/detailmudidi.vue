<template>
  <div class='detailmudidi'>
    <img src="~assets/imgs/detail/dingwei.svg" alt="">
    <span class="jihedispan">目的地:</span>
    <span class="jihediname">{{detailmudidi}}</span>
  </div>
</template>

<script>
  export default {
    name: 'detailmudidi',
    data() {
      return {}
    },
    props:{
      detailmudidi:{
        type:String,
        default(){
          return ""
        }
      }
    }
  }
</script>

<style scoped>
  .detailmudidi{
    padding: 16px 10px;
  }
  .detailmudidi img{
    width: 20px;
    vertical-align: -4px;
    margin-right: 5px;
  }
  .jihedispan{
    letter-spacing: 5px;
    color: #909090;
  }
  .jihediname{
    font-size: 17px;
    letter-spacing: 2px;
    vertical-align: -2px;
  }
</style>