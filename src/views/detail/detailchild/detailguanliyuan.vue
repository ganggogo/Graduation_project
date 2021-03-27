<template>
  <div class='detailguanliyuan'>
    <img src="~assets/imgs/detail/guanliyuan.svg" alt="">
    <span class="jihedispan">管理员:</span>
    <span class="jihediname">{{detailguanliyuan.name}}</span>
    <span class="guanliyuantel"><a :href="'tel:'">{{detailguanliyuan.tel}}</a></span>
  </div>
</template>

<script>
  export default {
    name: 'detailguanliyuan',
    data() {
      return {}
    },
    props:{
      detailguanliyuan:{
        type:Object,
        default(){
          return {}
        }
      },
    }
  }
</script>

<style scoped>
  .detailguanliyuan{
    padding: 16px 10px;
  }
  .detailguanliyuan img{
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
    vertical-align: 0px;
  }
  .guanliyuantel{
    display: inline-block;
    margin-left: 10px;
  }
</style>