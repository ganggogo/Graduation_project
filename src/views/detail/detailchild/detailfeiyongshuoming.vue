<template>
  <div class='detailfeiyongshuoming'>
    <!--头部-->
    <div class="toptitle">
      <div class="box">
        <div class="xian"></div>
        <img src="~assets/imgs/detail/feiyongshuoming.svg" alt="">
        <span style="display: inline-block;color: #FF4466">费用说明</span>
        <div class="xian"></div>
      </div>
    </div>
    <p>
      <span style="color: #EC0000;font-size: 22px"><b>【活动费用】</b></span><br><br>

      <span style="color: #EC0000;font-size: 24px">{{price.price}}</span>元（会员价）<br><br>

      <span style="color: #EC0000;font-size: 22px"><b>【报名方式】</b></span><br><br>

      1、点击“我要报名”，在帖子上填表报名。<br>
      2、微信报名：加微信19971170797报名。<br><br>

      <span style="color: #EC0000;font-size: 22px"><b>【付款方式】</b></span><br><br>

      支付宝：798710853@qq.com<br>

      关注寻游户外微信公共平台，活动费用立享折扣<br>

      <h2>关注寻游户外，体验旅行之美</h2>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'detailfeiyongshuoming',
    data() {
      return {}
    },
    props:{
      price:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detailfeiyongshuoming{
    padding: 5px 10px;
  }

  .toptitle{
    width: 100%;
    height: 40px;
  }
  .box{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  .box img{
    width: 26px;
    vertical-align: -6px;
    margin-right: 5px;
  }
  .xian{
    height: 0;
    width: 34%;
    border: 1px solid #FF4466;
  }
  .xian:nth-of-type(1){
    margin-right: 5px;
  }
  .xian:nth-of-type(2){
    margin-left: 5px;
  }

  p{
    font-size: 18px;
  }
</style>