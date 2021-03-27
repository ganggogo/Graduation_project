<template>
  <div class='detailjihedi'>
    <img src="~assets/imgs/detail/dingwei.svg" alt="">
    <span class="jihedispan">集合地:</span>
    <span class="jihediname">{{detailjihedi}}</span>
  </div>
</template>

<script>
  export default {
    name: 'detailjihedi',
    data() {
      return {}
    },
    props:{
      detailjihedi:{
        type:String,
        default(){
          return ""
        }
      }
    }
  }
</script>

<style scoped>
  .detailjihedi{
    padding: 16px 10px;
  }
.detailjihedi img{
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
  }
</style>