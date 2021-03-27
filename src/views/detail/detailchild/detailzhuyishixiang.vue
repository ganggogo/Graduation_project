<template>
  <div class='detailzhuyishixiang'>
    <!--头部-->
    <div class="toptitle">
      <div class="box">
        <div class="xian"></div>
        <img src="~assets/imgs/detail/zhuyishixiang.svg" alt="">
        <span style="display: inline-block;color: #FF4466">注意事项</span>
        <div class="xian"></div>
      </div>
    </div>
    <p><span style="color: #EC0000;font-size: 22px"><b>【必备物品】</b></span><br><br>
      1、证件：出游玩记得随身一定要带上身份证！以及各种证件。<br>
      2、服装：适合休闲徒步的鞋袜、衣物、背包等；。<br>
      3、装备：洗漱用品，保温杯服务区可以打热水喝。<br>
      4、其他：雨具。<br>
      5、药品：创可贴、消炎药等，晕车药。<br>
      6、设备：照相机，摄像机，数码伴侣，手机，对讲机，以上电器的充电器。<br>
      7、食品：一路走一路吃，零食自己准备些吧！<br><br>

      <span style="color: #EC0000;font-size: 22px"><b>【免责声明】</b></span><br><br>

      1、《户外活动免责声明书》：本活动是一个自发的户外运动群体，我们遵循环保、自助、节俭、友爱的出行方式。无论活动大小、无论长线短线，都应认真阅读本《户外活动免责声明书》。<br>

      2、本活动为自助游活动。遵循“自助,互助,环保”的原则，参加者必须对自己的安全负责，活动中发生意外，发起者和同行者有义务组织救援或改变行程，但不承担任何法律和经济责任，特此声明！<br>

      3、当由于意外事故，突发气候变化和急性疾病等不可预测因素造成身体损害时，活动的发起者和同行者有义务尽力救助。但如果造成了不可逆转的损害，团队的其他成员不负担任何责任。<br>

      4、队员参加活动前，必须事先与自己的家属沟通，取得家属的理解和支持，同时知道并同意该免责声明。<br>

      5、未经领队批准勿擅自离队 。<br>

      6、因突发原因，领队有取消活动、更改出发时间和线路的权利 。<br>

      7、如遇不可抗力（天气、政府行为等）或领队已尽其合理义务仍不能避免的事件（公共交通延误或取消、交通堵塞等）导致行程减少或延误,活动组织者不承担责任，敬请谅解 。<br>

      8、户外有风险，因出行造成不便或受伤责任自负。选择报名，则视为自动对本《户外活动免责声明书》认同并接受。</p>
  </div>
</template>

<script>
  export default {
    name: 'detailzhuyishixiang',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .detailzhuyishixiang{
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