<template>
  <div class="phoneyanzhenglogin">
    <!--nav-->
    <navbar class="phoneyanzhengloginnav">
      <div slot="left" class="phoneyanzhengloginnav_left" @click="phoneyanzhengloginnavback">
        <img src="~assets/imgs/wode/fanhui.svg" alt="">
      </div>
      <div slot="center" class="denglu">手机验证码登录</div>
      <div slot="right" @click="toregister"><span>注册</span></div>
    </navbar>
    <!--账号密码框-->

    <div class="box">
      <div class="box1">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/yonghuming.svg" alt="">
          </span>
        <input type="text" placeholder="请输入手机号" >
      </div>
      <div class="box1">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/suo.svg" alt="">
          </span>
        <!--验证码-->
        <input type="text" class="yanzhengmainput" v-model="code" placeholder="请输入验证码">
       <div @click="refreshCode"
            class="yanzhengmabox">
         <yanzhengma
             :identifyCode="identifyCode"
             >
         </yanzhengma>
       </div>
      </div>

      <!--登录按钮-->
      <van-button type="primary" class="mt-login">下一步</van-button>

      <div class="fogetmima">
        <span class="fogetmima_left" @click="tophoneyanzhengmalogin">其他方式登录</span>
        <span class="fogetmima_right" @click="wangjimima">忘记密码?</span>
      </div>
    </div>
  </div>
</template>

<script>
  import yanzhengma from "./yanzhengma";
  import navbar from "../../../components/common/navbar/navbar";
  export default {
    name: 'phoneyanzhengphoneyanzhenglogin',
    data() {
      return {
        identifyCode:"",
        identifyCodes:"1234567890",
        code:"",
      }
    },
    components:{
      navbar,
      yanzhengma
    },
    methods:{
      //忘记密码按钮
      wangjimima(){
        this.$router.push('/wangjimima')
      },
      //navbar返回按钮
      phoneyanzhengloginnavback(){
        this.$router.go(-1)
      },
      //其他方式登录
      tophoneyanzhengmalogin(){
        this.$router.go(-1)
      },
      //去注册
      toregister(){
        this.$router.replace('/register')
      },
      //验证码
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
  .phoneyanzhenglogin{

    background-image: radial-gradient( circle 627px at 52.1% 62.7%,  rgba(255,68,102,1) 64.1%, rgba(187,187,187,1) 100.2% );
    opacity:0.9;
    height: 100vh;
    width: 100%;
  }
  .phoneyanzhengloginnav{
    color: white;
  }
  .phoneyanzhenglogin .denglu{
    font-size: 23px;
  }
  .phoneyanzhengloginnav span{
    display: inline-block;
    font-size: 14px;
    width: auto;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid white;
    padding: 5px;
    margin-right: 15px;
  }
  .phoneyanzhengloginnav_left img{
    width: 23px;
    margin-top: 14px;
  }
  .img1{
    vertical-align: -10px;
    display: inline-block;
    margin-top: 4px;
  }
  .svg1{
    padding: 5px;
  }
  .svg1 img{
    width: 24px;
  }
  .box{
    padding: 25px 20px;
  }
  .box1:nth-of-type(1){
    border-bottom: 1px solid #DFDFDF;
  }
  .box1{
    display: flex;
    background-color: rgba(212,212,212,0.3);
  }

  .box input{
    width: 230px;
    height: 25px;
    padding: 10px 3px;
    -moz-appearance: none;
    outline: none;
    border: none;
    background-color: rgba(0,0,0,0);
    font-size: 20px;
    color: white;
  }
  input::-webkit-input-placeholder{
    color: #cdcdcd;
  }

  .mt-login{
    background-color: white;
    color: #FF4466;
    width: 100%;
    margin-top: 15px;
    border: none;
    font-size: 20px;
  }
  .fogetmima{
    color: white;
    margin-top: 5px;
  }
  .fogetmima_right{
    display: inline-block;
    float: right;
  }

  .box .yanzhengmainput{
    width: 206px;
  }
  .yanzhengmabox{
    height: 40px;
    margin-top: 5px;
    margin-right: 8px;
  }
</style>