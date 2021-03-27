<template>
  <div class='zixunneirong'>
    <div class="item1">
      <a :href="'tel:'">
        <img src="~assets/imgs/detail/dianhua.svg" alt="">
        <span class="name">寻游苗苗</span>
        <span class="guanliyuan">管理员</span>
      </a>
    </div>
    <div style="height: 1px;width: 100%;background-color: #C8C8C8"></div>
    <div class="item2">
      <img src="~assets/imgs/detail/weixin.svg" alt="">
      <span class="name">寻游苗苗</span>
    </div>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/scroll";
  export default {
    name: 'zixunneirong',
    components: {Scroll},
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .zixunneirong{
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
  /*.item1{*/
  /*  border-bottom: 1px solid #C8C8C8;*/
  /*}*/
  .item1,.item2{
    height: 46px;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .item1 img{
    width: 36px;
    vertical-align: -13px;
    margin-right: 10px;
  }
  .item2 img{
    width: 46px;
    vertical-align: -16px;
    margin-right: 6px;
  }
  .name{
    display: inline-block;
    color: #32B761;
    line-height: 46px;
    font-size: 18px;
  }
  .guanliyuan{
    display: inline-block;
    border: 1px solid #FF4466;
    font-size: 13px;
    height: 20px;
    line-height: 20px;
    color: #FF4466;
    margin-left: 10px;
    vertical-align: 2px;
  }
</style>