<template>
  <div class='detailxingchenganpai'>
    <!--头部-->
    <div class="toptitle">
      <div class="box">
        <div class="xian"></div>
        <img src="~assets/imgs/detail/xingchenganpai.svg" alt="">
        <span style="display: inline-block;color: #FF4466">行程安排</span>
        <div class="xian"></div>
      </div>
    </div>
    <p>
      <p style="color: #EC0000;font-size: 20px">
    <br><br>
    <span style="color: #EC0000;font-size: 22px"><b>暂无详细安排！</b></span><br><br>

    以上为活动预计时间，如中途遇修路、堵车等不可抗拒力情况，领队有权调整活动时间及行程先后顺序、乃至取消个别景点。</p>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'detailxingchenganpai',
    data() {
      return {

      }
    },

  }
</script>

<style scoped>
  .detailxingchenganpai{
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
</style>