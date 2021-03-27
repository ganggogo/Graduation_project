<template>
  <div class='wangjimima'>
    <!--nav-->
    <navbar class="wangjimimanav">
      <div slot="left" class="wangjimimanav_left" @click="wangjimimanavback">
        <img src="~assets/imgs/wode/fanhui.svg" alt="">
      </div>
      <div slot="center" class="denglu">重置密码</div>
    </navbar>

    <!-- tab-container -->

    <van-tabs v-model="active">
      <van-tab title="通过手机号找回">
        <div class="phone">
          <span class="span1">手机</span>
          <input type="text" placeholder="例如:19971170797">
          <span class="span2">获取短信验证码</span>
        </div>
        <div class="phone1">
          <span class="span2">短信验证码</span>
          <input type="text" placeholder="手机收到的验证码">
        </div>
        <van-button type="primary" class="mt-login">下一步</van-button>
      </van-tab>
      <van-tab title="通过邮箱找回">
        <div class="mail">
          <span class="span1">邮箱</span>
          <input type="text" placeholder="例如:798710853@qq.com">

        </div>
        <div class="mail1">
          <span class="span2">验证码</span>
          <input type="text" placeholder="请输入图中的验证码">
          <div @click="refreshCode"
               class="yanzhengmabox">
            <yanzhengma
                :identifyCode="identifyCode"
            >
            </yanzhengma>
          </div>
        </div>
        <van-button type="primary" class="mt-login">发送</van-button>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
  import navbar from "../../../components/common/navbar/navbar";
  import yanzhengma from "./yanzhengma";
  export default {
    name: 'wangjimima',
    data() {
      return {
        //tab切换的
        active: 0,

        //验证码的
        identifyCode:"",
        identifyCodes:"1234567890",
        code:"",
      }
    },
    components:{
      navbar,
      yanzhengma
    },
    methods: {
      //忘记密码nav返回按钮
      wangjimimanavback(){
        this.$router.go(-1)
      },

      randomNum(min,max){
        return Math.floor(Math.random()*(max - min) + min)
      },
      refreshCode(){
        this.identifyCode = ""
        this.makeCode(this.identifyCodes,4)
      },
      makeCode(o,l){
        for(let i = 0 ; i < l ; i ++){
          this.identifyCode += this.identifyCodes[
              this.randomNum(0,this.identifyCodes.length)
              ]
        }
        console.log(this.identifyCode)
      }
    },
    created() {
      //初始化验证码
      this.refreshCode()
    },
    mounted() {
      //验证码
      this.identifyCode = ""
      this.makeCode(this.identifyCodes,4)
    }
  }
</script>

<style scoped>
  .wangjimima{
    background-color: #F6F6F6;
    opacity:0.9;
    height: 100vh;
    width: 100%;
  }
  .wangjimimanav{
    background-color:#FF4466;
    color: white;
  }
  .wangjimimanav_left img{
    width: 23px;
    margin-top: 14px;
  }
  .mint-navbar{
    color: black;
    /*background-color: #FF4466;*/
  }
  .mint-tab-item-label{
    font-size: 14px;
  }
  .phone{
    border-top: 16px solid #F6F6F6;
    border-bottom: 10px solid #F6F6F6;
    padding: 0 10px;
    height: 50px;
    background-color: white;
    margin-top: 5px;

  }
  .phone .span1{
    display: inline-block;
    height: 100%;
    line-height: 50px;
  }
  .phone .span2{
    display: inline-block;
    height: 100%;
    line-height: 50px;
    color: #FF4466;
    font-size: 14px;
    float: right;
  }
  .phone input{
    -moz-appearance: none;
    outline: none;
    border: none;
    margin-left: 20px;
    font-size: 18px;
  }
  .phone1{
    border-top: 16px solid #F6F6F6;
    border-bottom: 10px solid #F6F6F6;
    padding: 0 10px;
    height: 50px;
    background-color: white;
  }
  .phone1 .span2{
    display: inline-block;
    height: 100%;
    line-height: 50px;
  }
  .phone1 input{
    -moz-appearance: none;
    outline: none;
    border: none;
    margin-left: 20px;
    font-size: 18px;
  }



  .mail{
    border-top: 16px solid #F6F6F6;
    border-bottom: 10px solid #F6F6F6;
    padding: 0 10px;
    height: 50px;
    background-color: white;
    margin-top: 5px;
  }
  .mail .span1{
    display: inline-block;
    height: 100%;
    line-height: 50px;
  }
  .mail .span2{
    display: inline-block;
    height: 100%;
    line-height: 50px;
    color: #FF4466;
    font-size: 14px;
    float: right;
  }
  .mail input{
    -moz-appearance: none;
    outline: none;
    border: none;
    margin-left: 20px;
    font-size: 18px;
  }
  .mail1{
    border-top: 16px solid #F6F6F6;
    border-bottom: 10px solid #F6F6F6;
    padding: 0 10px;
    height: 50px;
    background-color: white;
    display: flex;

  }
  .mail1 .span2{
    display: inline-block;
    height: 100%;
    line-height: 50px;
  }
  .mail1 input{
    -moz-appearance: none;
    outline: none;
    border: none;
    margin-left: 20px;
    font-size: 18px;
    width: 180px;
  }
  .mt-login{
    background-color: #FF4466;
    color: white;
    width: 94%;
    margin-top: 15px;
    margin-left: 3%;
    border: none;
    font-size: 20px;
  }

  .yanzhengmabox{
    height: 40px;
    margin-top: 5px;
    margin-right: 8px;
  }
</style>