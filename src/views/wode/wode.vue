<template>
    <div class="wode">
      <nav-bar class="navbar">
        <div slot="center">个人中心</div>
      </nav-bar>


        <div class="personinfo" @click="qudenglu" v-if="!this.isLogined">
          <div class="personinfoimg">
            <img src="~assets/imgs/wode/gerentouxiang.svg" alt="">
          </div>
          <div class="personinfotext" >
            <div class="left">
              <div class="login">登录/注册</div>
              <div class="phone">
                <div><img src="~assets/imgs/wode/shouji.svg" alt=""></div>
                <div>暂未绑定手机号</div>
              </div>
            </div>
            <div class="xiangyou"><img src="~assets/imgs/wode/xiangyou.svg" alt=""></div>
          </div>
        </div>

      <div class="personinfo" @click="qutuichudenglu" v-else>
        <div class="personinfoimg">
          <img src="~assets/imgs/wode/logined.png" alt="">
        </div>
        <div class="personinfotext" >
          <div class="left">
            <div class="login">寻游用户{{this.zhanghao}}</div>
            <div class="phone">
              <div><img src="~assets/imgs/wode/shouji.svg" alt=""></div>
              <div>{{this.zhanghao}}</div>
            </div>
          </div>
          <div class="xiangyou"><img src="~assets/imgs/wode/xiangyou.svg" alt=""></div>
        </div>
      </div>


        <div class="myinfo">
          <div class="myyue" @click="yue">
            <div class="myyueinner">
              <div class="top"><span class="num"><b>0.00</b></span>元</div>
              <div>我的余额</div>
            </div>
          </div>
          <div class="myyouhui" @click="youhui">
            <div class="myyouhuiinner">
              <div class="top"><span class="num"><b>0</b></span>个</div>
              <div>我的优惠</div>
            </div>
          </div>
          <div class="myjifen" @click="jifen">
            <div class="myjifeninner">
              <div class="top"><span class="num"><b>0</b></span>分</div>
              <div>我的积分</div>
            </div>
          </div>
        </div>
        <div class="rowinfo" @click="xiaoxi">
          <div class="icon"><img src="~assets/imgs/wode/xinfeng.svg" alt=""></div>
          <div class="title">我的消息</div>
        </div>
        <div class="rowinfo">
          <div class="icon"><img src="~assets/imgs/wode/jifenshangcheng.svg" alt=""></div>
          <div class="title">积分商城</div>
        </div>
        <div class="rowinfo">
          <div class="icon"><img src="~assets/imgs/wode/vip.svg" alt=""></div>
          <div class="title">会员卡</div>
        </div>
        <div class="rowinfo">
          <div class="icon"><img src="~assets/imgs/wode/gouwuche.svg" alt=""></div>
          <div class="title">我的购物车</div>
        </div>
        <div class="rowinfo">
          <div class="icon"><img src="~assets/imgs/wode/shangcheng.svg" alt=""></div>
          <div class="title">下载购物app</div>
        </div>
    </div>
</template>

<script>


  import NavBar from "../../components/common/navbar/navbar";
  import Scroll from "../../components/common/scroll/scroll";
  import {Toast} from 'vant'
  import { Dialog } from 'vant'
  export default {
    name: 'wode',
    data(){
      return{
        isLogined:false,
        zhanghao:''
      }
    },

    components: {
      Scroll,
      NavBar
    },
    methods:{
      qutuichudenglu(){
        Dialog.confirm({
          title: '注销登录',
          message: '是否确认退出登录?',
        }).then(()=>{
          this.$router.go(0)
          localStorage.removeItem('guanliyuan')
          localStorage.removeItem('cart')
          localStorage.removeItem('xingcheng')
          localStorage.removeItem('fenleicelan')

          //删除行程订单数据库数据
          this.$axiosxingchengorder.post('/deleteall')
          //删除商品订单数据库数据
          this.$axiosgoodsorderinfo.post('/deleteall')

        }).catch(()=>{

        })
      },



      qudenglu(){
        this.$router.push('/login')
      },

      yue(){
        Toast.fail('余额为0!')
      },
      youhui(){
        Toast.fail('暂无优惠!')
      },
      jifen(){
        Toast.fail('积分为0!')
      },
      xiaoxi(){
        Toast.fail('暂无消息!')
      }
    },
    activated() {
      if(localStorage.getItem('guanliyuan')){
        console.log('已登录...')
        this.zhanghao = localStorage.getItem('guanliyuan').split('.')[1]
        this.isLogined = true

        console.log(this.zhanghao)
      }else {
        console.log('未登录...')
        this.isLogined = false
      }
    }
  }
</script>

<style scoped>
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .wode{
    width: 100%;
    height: 100vh;
  }
  .navbar{
    background-color: #FF4466;
    color: white;
    text-align: center;
  }
  .personinfo{
    width: 100%;
    height: 16%;
    background-color: #FF4466;
    display: flex;
  }
  .personinfoimg{
    padding: 5px;
    width: 25%;
    position: relative;
    /*border-right: red solid 1px;*/
  }
  .personinfotext{
    flex: 1;
    /*background-color: rgb(220,215,216);*/
  }
  .personinfoimg img{
    width: 70%;
    height: 70%;
    position: absolute;
    top: 15.5%;
    left: 15.5%;
    border-radius: 50%;
    border: 1px solid rgb(235,234,234);
    background-color: rgb(235,234,234);
  }
  .phone{
    display: flex;
    margin-top: 5px;
  }
  .phone img{
    width: 20px;
    vertical-align: -1px;
  }
  .personinfotext{
    color: white;
    display: flex;
    align-items: center;
  }
  .left{
    width: 236px;
  }
  .login{
    font-size: 20px;
    margin-bottom: 15px;
  }
  .xiangyou{
    width: 50px;
    /*margin-left: 26%;*/
  }
  .xiangyou img{
    width: 50px;
  }
  .myinfo{
    width: 100%;
    height: 16%;
    display: flex;
    border-bottom: 1px solid rgb(248,248,248);
    justify-content: center;
    align-items: center;
    border-bottom: 14px solid rgb(248,248,248);
  }
  .myyue{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgb(235,235,235);
  }
  .myyouhui{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgb(235,235,235);
  }
  .myjifen{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .num{
    font-size: 20px;
    color: rgb(253,93,81);
  }
  .top{
    text-align: center;
  }
  .rowinfo{
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid rgb(235,235,235);
  }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon img{
    width: 50px;
    height: 20px;
  }
  .title{
    height: 100%;
    line-height: 50px;
  }
  .rowinfo:nth-last-child(3){
    border-bottom: 14px solid rgb(248,248,248);
  }
</style>
