<template>
  <div class='register'>
    <!--nav-->
    <navbar class="registernav">
      <div slot="left" class="registernav_left" @click="registernavback">
        <img src="~assets/imgs/wode/fanhui.svg" alt="">
      </div>
      <div slot="center" class="denglu">注册</div>
      <div slot="right" @click="toshouye"><span class="zhuce">随便逛逛</span></div>
    </navbar>
    <!--账号密码框-->

    <div class="box">
      <div class="box1">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/yonghuming.svg" alt="">
          </span>
        <input type="text" placeholder="请输入手机号/邮箱地址" v-model="zhanghao">
      </div>

      <div class="box1" style="border-bottom: 1px solid #DFDFDF;">
          <span class="svg1">
            <img class="img1" src="~assets/imgs/zuocelan/suo.svg" alt="">
          </span>
        <!--密码-->
        <input type="password" class="yanzhengmainput" v-model="psw" placeholder="请输入密码">

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
      <van-button type="primary" class="mt-login" :class="{'mt-login-active':inputnotempty}" @click="tozhuce">下一步</van-button>
    </div>
  </div>
</template>

<script>
  import yanzhengma from "./yanzhengma";
  import navbar from "../../../components/common/navbar/navbar";
  import {Toast} from 'vant'
  export default {
    name: 'register',
    data() {
      return {
        identifyCode:"",
        identifyCodes:"1234567890",
        code:"",
        zhanghao:'',
        psw:'',
        shoujireg:/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/,
        youxiangreg:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
        pswreg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/, //6-12为数字字母组合
        inputnotempty:false,

        registerData:{}
      }
    },
    components:{
      navbar,
      yanzhengma
    },
    methods:{
      //navbar返回按钮
      registernavback(){
        this.$router.go(-1)
      },
      //随便逛逛到主页
      toshouye(){
        this.$router.replace('/shouye')
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
      },

      //点击注册下一步按钮
      tozhuce(){

        if(this.inputnotempty){
          let isShouji = this.shoujireg.test(this.zhanghao)
          let isYouxiang = this.youxiangreg.test(this.zhanghao)
          let isPsw = this.pswreg.test(this.psw)
          if(!isShouji){
            Toast.fail('手机号或邮箱格式有误，请重新输入！')
          }else if(!isPsw){
            Toast.fail('密码格式设置错误!')
          }else if(this.code !== this.identifyCode){
            Toast.fail('验证码错误！')
            this.code = ''
            this.refreshCode()
          }else {

            //保存注册信息到registerData
            this.registerData.zhanghao = this.zhanghao
            this.registerData.password = this.psw

            //注册开始
            this.$axios.post('/register',this.registerData).then(res=>{
              console.log(res.data)
              Toast.success('恭喜注册成功!')
              this.zhanghao = ''
              this.psw = ''
              this.code = ''
              this.refreshCode()
              this.$router.replace('/login')
            })
          }

        }else {
          if(!this.zhanghao){
            Toast.fail('账号不能为空!')
          }else if(!this.psw){
            Toast.fail('密码不能为空!')
          }else if(!this.code){
            Toast.fail('验证码不能为空!')
          }
        }

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
    },
    watch:{
      code(){
        if(this.zhanghao && this.code && this.psw){
          this.inputnotempty = true
        }else {
          this.inputnotempty = false
        }
      }
    },
    deactivated() {
      this.zhanghao = ''
      this.psw = ''
      this.code = ''
      this.refreshCode()
    }
  }
</script>

<style scoped>
  .register{

    background-image: radial-gradient( circle 627px at 52.1% 62.7%,  rgba(255,68,102,1) 64.1%, rgba(187,187,187,1) 100.2% );
    opacity:0.9;
    height: 100vh;
    width: 100%;
  }
  .registernav{
    color: white;
    position: relative;
  }
  .phoneyanzhenglogin .denglu{
    font-size: 23px;
  }
  .registernav span{
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    border: 1px solid white;
    padding: 0px 5px;
    height: 30px;
    position: absolute;
    top: 7px;
    left: 327px;
  }
  .registernav_left img{
    width: 23px;
    margin-top: 14px;
  }
  .img1{
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

  .box .yanzhengmainput{
    width: 206px;
  }
  .yanzhengmabox{
    height: 40px;
    margin-top: 5px;
    margin-right: 8px;
  }
</style>