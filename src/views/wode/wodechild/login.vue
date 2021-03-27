<template>
  <div class="login">
    <!--nav-->
    <navbar class="loginnav">
      <div slot="left" class="loginnav_left" @click="loginnavback" >
        <img src="~assets/imgs/wode/fanhui.svg" alt="">
      </div>
      <div slot="center" class="denglu">账号登录</div>
      <div slot="right" @click="toregister"><span class="zhuce">注册</span></div>
    </navbar>
    <!--账号密码框-->

    <div class="box">
      <div class="box1">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/yonghuming.svg" alt="">
          </span>
        <input type="text" placeholder="请输入手机/邮箱" v-model="zhanghao" >
      </div>
      <div class="box1">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/suo.svg" alt="">
          </span>
        <input type="password" placeholder="请输入密码" v-model="psw"  v-on:input="change">
      </div>

      <!--登录按钮-->
      <van-button type="primary" class="mt-login" :class="{'mt-login-active':inputnotempty}" @click="toLogin">登录</van-button>
      <!--忘记密码-->
      <div class="fogetmima">
        <span class="fogetmima_left" @click="tophoneyanzhengmalogin">手机验证码登录</span>
        <span class="fogetmima_right" @click="wangjimima">忘记密码?</span>
      </div>
      <!--第三方登录-->
      <div class="disanfang">
        第三方登录
      </div>
    </div>

    <hr style="color: #E1E1E1;">
    <div class="bottomicon">
      <div class="item"><img src="~assets/imgs/zuocelan/QQ.svg" alt=""><div>QQ</div></div>
      <div class="item"><img src="~assets/imgs/zuocelan/weixin.svg" alt=""><div>微信</div></div>
      <div class="item"><img src="~assets/imgs/zuocelan/weibo.svg" alt=""><div>微博</div></div>
    </div>
  </div>
</template>

<script>
  import navbar from "../../../components/common/navbar/navbar";
  import {Toast} from "vant";
  export default {
    name: 'login',
    data() {
      return {
        zhanghao:'',
        psw:'',
        inputnotempty:false,
        shoujireg:/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/,
        youxiangreg:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
        pswreg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,
        loginData:{}
      }
    },
    components:{
      navbar
    },

    methods:{
      change(){
        if(this.zhanghao && this.psw){
          this.inputnotempty = true
        }else {
          this.inputnotempty = false
        }
      },

      //nav返回按钮
      loginnavback(){
        this.$router.go(-1)
      },
      //手机验证码登录
      tophoneyanzhengmalogin(){
        this.$router.push('/phoneyanzhenglogin')
      },
      //去注册
      toregister(){
        this.$router.replace('/register')
      },
      //忘记密码
      wangjimima(){
        this.$router.push('/wangjimima')
      },

      //点击登录按钮
      toLogin(){
        if(this.inputnotempty){
          let isShouji = this.shoujireg.test(this.zhanghao)
          let isYouxiang = this.youxiangreg.test(this.zhanghao)
          let isPsw = this.pswreg.test(this.psw)
          if(!isShouji){
            Toast.fail('手机号或邮箱格式有误，请重新输入！')
          }else if(!isPsw){
            Toast.fail('密码格式设置错误!')
          }else {
            //保存注册信息到registerData
            this.loginData.zhanghao = this.zhanghao
            this.loginData.password = this.psw
            //登录开始(第一次写有bug)
            this.$axios.post('/login',this.loginData).then(res=>{
              console.log(res.data) //打印6050dd5cc4c1065b948ec7ae.13371170797  //这句话有奇效，应该在下面做一个判断
              Toast.success('恭喜登录成功!')
              //清空输入框
              this.zhanghao = ''
              this.psw = ''
              this.$router.replace('/shouye')

              localStorage.setItem('guanliyuan','Bearer'+res.data)
            })
          }

        }else {
          if(!this.zhanghao){
            Toast.fail('账号不能为空!')
          }else if(!this.psw){
            Toast.fail('密码不能为空!')
          }
        }
      }
    },
    watch:{
      zhanghao(){
        if(this.zhanghao && this.psw){
          this.inputnotempty = true
        }else {
          this.inputnotempty = false
        }
      }
    },
    deactivated() {
      this.zhanghao = ''
      this.psw = ''
    }
  }
</script>

<style scoped>
  .login{

    background-image: radial-gradient( circle 627px at 52.1% 62.7%,  rgba(255,68,102,1) 64.1%, rgba(187,187,187,1) 100.2% );
    opacity:0.9;
    height: 100vh;
    width: 100%;
  }
  .loginnav{
    color: white;
  }
  .login .denglu{
    font-size: 23px;
  }
  .loginnav span{
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
  .loginnav_left img{
    width: 23px;
    margin-top: 14px;
  }
  .zhuce{

  }
  .img1{
    vertical-align: -4px;
    display: inline-block;
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
    color: rgba(255,68,102,0.4);
    width: 100%;
    margin-top: 15px;
    border: none;
    font-size: 20px;
  }
  .mt-login-active{
    background-color: white;
    color: rgba(255,68,102,1);
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
  .disanfang{
    width: 100%;
    text-align: center;
    color: white;
    padding-top: 45px;
  }

  .bottomicon img{

    width: 46px;
  }
  .bottomicon{
    color: #dbdbdb;
    display: flex;
    padding: 30px 60px;
    justify-content: space-around;
  }
  .item{
    position: relative;
  }
  .item div{
    position: absolute;
    top: 60px;
    left: 8px;
  }


</style>