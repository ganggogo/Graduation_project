<template>
  <div class='detailbottom'>
    <div class="left" @click="zixun">
      <img src="~assets/imgs/detail/zixun.svg" alt="">
      <span>咨询</span>
    </div>
    <div class="center" @click="goshouye">
      <img src="~assets/imgs/detail/shouye.svg" alt="">
      <span>首页</span>
    </div>
    <div class="right">
      <van-button type="primary" class="mt-login" @click="woyaobaoming">我要报名</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailbottom',
    data() {
      return {}
    },
    methods:{
      //咨询按钮
      zixun(){
        this.$emit('zixun')
      },
      //首页按钮
      goshouye(){
        this.$router.replace('/shouye')
      },
      //我要报名按钮
      woyaobaoming(){
        this.$emit('woyaobaoming')
      }
    }
  }
</script>

<style scoped>
.detailbottom{
  display: flex;
  height: 60px;
  box-shadow: 0 1px 3px rgba(100,100,100,0.8);
  width: 100%;
  background-color: white;
}
.detailbottom .left{
  position: relative;
  color: #707070;
}
.detailbottom .center{
  position: relative;
  color: #707070;
}
.detailbottom span{
  display: block;
  margin-top: 30px;
}
.detailbottom .left img,.detailbottom .center img{
    position: absolute;
    top: 4px;
    left: 12px;
    width: 28px;
    vertical-align: -4px;
    margin-right: 1px;
  }
  .detailbottom span{
    display: block;
    text-align: center;
  }
  .detailbottom .left{
    flex: 1;
  }
  .detailbottom .center{
    flex: 1;
  }
  .detailbottom .right{
    width: 75%;
  }
  .detailbottom .right{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mt-login{
    width: 95%;
    background-color: #FF4466;
    border: none;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 20px;
    letter-spacing: 4px;
  }
  .van-button__text{
    margin-bottom: 30px;
  }
</style>