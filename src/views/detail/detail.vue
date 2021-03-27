<template>
  <div class='detail'>
    <detailnavbar ref="detailnavbar" @detailnavbaritem="detailnavbaritem"></detailnavbar>
    <!--右侧栏-->
    <shouyeyoucelan @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelan>
    <!--联系我们-->
    <van-popup
        v-model="lianxiwomenshow"
    >
      <shouyelianxiwomen style="padding:0"></shouyelianxiwomen>
    </van-popup>
    <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentScroll"
    >
      <!--详情页顶部图片-->
      <detailtopimg :detailtopimg="detail.detailtopimg" ref="detailtopimg"></detailtopimg>
      <!--详情页顶部信息-->
      <detailtopinfo :detailtopinfo="detail.detailtopinfo" ref="topimg"></detailtopinfo>
      <!--分隔线-->
      <div style="width: 100%;height: 12px;background-color: #F6F6F6"></div>
      <!--详情页集合地-->
      <detailjihedi :detailjihedi="detail.detailjihedi"></detailjihedi>
      <!--分隔线-->
      <div style="width: 100%;height: 3px;background-color: #F6F6F6"></div>
      <!--详情页目的地-->
      <detailmudidi :detailmudidi="detail.detailmudidi"></detailmudidi>
      <!--分隔线-->
      <div style="width: 100%;height: 3px;background-color: #F6F6F6"></div>
      <!--详情页管理员-->
      <detailguanliyuan :detailguanliyuan="detail.detailguanliyuan "></detailguanliyuan>
      <!--分隔线-->
      <div style="width: 100%;height: 12px;background-color: #F6F6F6"></div>
      <!--最近报名-->
      <detailzuijinbaoming></detailzuijinbaoming>
      <!--分隔线-->
      <div style="width: 100%;height: 3px;background-color: #F6F6F6"></div>
      <!--选择时间-->
      <detailxuanzeshijian
          @changeshow="changeshow"
          :date="date"
          ref="xuanzepici"
      >

      </detailxuanzeshijian>
      <!--分隔线-->
      <div style="width: 100%;height: 12px;background-color: #F6F6F6"></div>
      <detailxingchenganpai ref="detailxingchenganpai"></detailxingchenganpai>
      <!--分隔线-->
      <div style="width: 100%;height: 12px;background-color: #F6F6F6"></div>
      <detailfeiyongshuoming ref="detailfeiyongshuoming" :price="detail.detailtopinfo"></detailfeiyongshuoming>
      <!--分隔线-->
      <div style="width: 100%;height: 12px;background-color: #F6F6F6"></div>
      <detailzhuyishixiang ref="detailzhuyishixiang"></detailzhuyishixiang>
    </scroll>

    <!--咨询弹出层-->
    <nut-popup v-model="zixunshow" position="bottom" :style="{ height: '20%' }" >
      <zixunneirong></zixunneirong>
    </nut-popup>
    <!--我要报名按钮-->
    <van-dialog class="baomingpopup" v-model="baomingshow" @confirm="confirm" title="  " show-cancel-button>
      请确定行程,确认要报名吗?
    </van-dialog>
    <!--日历插件-->
    <van-calendar color="#FF4466" v-model="show" type="range" @confirm="onConfirm" />


    <!--detailnavbar-->
    <detaibottom class="detailbottom" @zixun="zixun" @woyaobaoming="woyaobaoming"></detaibottom>
    <!--回到顶部-->
    <back-top @click.native="gotop" v-show="isbacktopbuttonshow"></back-top>
  </div>
</template>

<script>
  import shouyelianxiwomen from '../shouye/shouyechild/shouyelianxiwomen'
  import Detailnavbar from "./detailchild/detailnavbar";
  import Scroll from "../../components/common/scroll/scroll";
  import BackTop from "../../components/common/backtop/backtop";
  import Detaibottom from "./detailchild/detailbottom";
  import Detailtopimg from "./detailchild/detailtopimg";
  import Detailtopinfo from "./detailchild/detailtopinfo";
  import Detailjihedi from "./detailchild/detailjihedi";
  import Detailmudidi from "./detailchild/detailmudidi";
  import Detailguanliyuan from "./detailchild/detailguanliyuan";
  import Detailxuanzeshijian from "./detailchild/detailxuanzeshijian";
  import Detailzuijinbaoming from "./detailchild/detailzuijinbaoming";
  import Shouyeyoucelan from "./shouyeyoucelan";
  import Detailxingchenganpai from "./detailchild/detailxingchenganpai";
  import Detailfeiyongshuoming from "./detailchild/detailfeiyongshuoming";
  import Detailzhuyishixiang from "./detailchild/detailzhuyishixiang";
  import {debounce} from "common/utils.js"
  import Zixunneirong from "./detailchild/zixunneirong";


  import {mapActions} from 'vuex'

  import {getXingchengDetail} from  'network/xingchengdetail.js'

  import { Toast } from 'vant';
  export default {
    name: 'detail',
    components: {
      shouyelianxiwomen,
      Zixunneirong,
      Detailzhuyishixiang,
      Detailfeiyongshuoming,
      Detailxingchenganpai,
      Shouyeyoucelan,
      Detailzuijinbaoming,
      Detailxuanzeshijian,
      Detailguanliyuan,
      Detailmudidi,
      Detailjihedi,
      Detailtopinfo,
      Detailtopimg,
      Detaibottom,
      Scroll,
      Detailnavbar,
      BackTop
    },
    data() {
      return {
        //联系我们
        lianxiwomenshow:false,

        //记录navitem距顶部距离
        // getnavbaritemtopY:null,
        navbaritemtopY:[],
        currentIndex:0,

        //日历组件数据
        date: '',
        show: false,

        //咨询弹出层
        zixunshow: false,

        //报名弹出层
        baomingshow:false,

        isbacktopbuttonshow:false,
        id:null,

        //temp
        detail:{},


        //是否登录
        isLogined:false
      }
    },
    created() {

      if(localStorage.getItem('guanliyuan')){
        console.log('已登录...')
        this.zhanghao = localStorage.getItem('guanliyuan').split('.')[1]
        this.isLogined = true

        console.log(this.zhanghao)
      }else {
        console.log('未登录...')
        this.isLogined = false
      }
      // console.log(this.isLogined)


      //1.保存传入的iid
      // console.log(this.$route.params);
      this.id = this.$route.params.id
      console.log(this.id)
      //保存每个navitem的距离

      this.getnavbaritemtopY = debounce(()=>{
        //每次赋值给navbaritemtopY数组清空
        this.navbaritemtopY = []
        this.navbaritemtopY.push(0)
        this.navbaritemtopY.push(this.$refs.detailxingchenganpai.$el.offsetTop)
        this.navbaritemtopY.push(this.$refs.detailfeiyongshuoming.$el.offsetTop)
        this.navbaritemtopY.push(this.$refs.detailzhuyishixiang.$el.offsetTop)
      },1000)

      this.getnavbaritemtopY()


      getXingchengDetail(this.id).then(res=>{
        this.detail = res[0]
        // console.log(res)
      })
    },

    methods:{
      // ...mapActions(['addtoxingcheng']),


      //联系我们
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },

      //保存行程页面要用的数据
      // addxingcheng(){
      //   const xingchengdata = {}
      //   xingchengdata.date = this.date
      //   xingchengdata.img = this.detailtopimg
      //   xingchengdata.price = this.detailtopinfo.price
      //
      //   //保存行程页面要用的数据
      //   this.addtoxingcheng(xingchengdata)
      // },
      //底部我要报名按钮
      woyaobaoming(){
        if(!this.date){
          Toast.fail('请选择出行时间!')
          this.$refs.scroll.scrollTo(0,-380)
        }else if(!this.isLogined){
          Toast.fail('未登录,请先登录账号！')
        }else {
          this.baomingshow = true
        }

      },
      //报名按钮点确认回调函数
      confirm(){
        const xingchengdata = {}
        xingchengdata.id =  this.id
        xingchengdata.title = this.detail.detailtopinfo.text
        xingchengdata.date = this.date
        xingchengdata.img = this.detail.detailtopimg
        xingchengdata.price = this.detail.detailtopinfo.price

        //保存行程页面要用的数据
        this.$store.dispatch('addtoxingcheng',xingchengdata).then(res=>{
          if(res==='请勿重复报名!'){
            Toast.fail(res)
          }else {
            Toast.success((res))
          }
        })

        //其实，将这个id的商品的一部分信息保存到localstorage，一部分保存到数据库，但都有一个公用属性id,
        //当删除订单的这个行程的时候，同时删除数据库的信息和localstorage的信息,即可保持同步

        //=============
        //保存到数据库的行程data
        //获取当前时间
        const myDate = new Date();
        const year = myDate.getFullYear(); //获取当前年
        var mon = myDate.getMonth() + 1; //获取当前月
        if(mon<10 && mon>0){
          mon = '0' + mon
        }
        const date = myDate.getDate(); //获取当前日
        var h = myDate.getHours();//获取当前小时数(0-23)
        if(h<10 && h>=0){
          h = '0' + h
        }
        var m = myDate.getMinutes();//获取当前分钟数(0-59)
        if(m<10 && m>=0){
          m = '0' + m
        }
        var s = myDate.getSeconds();//获取当前秒
        if(s<10 && s>=0){
          s = '0' + s
        }
        const orderdate = year + '-' + mon + '-' + date + ' ' + h + ':' + m + ':' + s

        const xingchengorder = {}

        xingchengorder.iid = this.id
        xingchengorder.img = this.detail.detailtopimg
        xingchengorder.title = this.detail.detailtopinfo.text
        xingchengorder.price = this.detail.detailtopinfo.price
        xingchengorder.chuxingdate = this.date
        xingchengorder.orderdate = orderdate
        xingchengorder.status = 'false'

        this.$axiosxingchengorder.post('/order',xingchengorder).then(res=>{
          console.log(res.data)
        })
      },
      //底部栏咨询按钮
      zixun(){
        this.zixunshow = true
      },
      //选择日期插件
      changeshow(data){
        this.show = true
      },
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        const [start, end] = date;
        this.show = false;
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        // console.log(this.date)
      },
      //页面滚动方法
      contentScroll(position){
        //1.检测内容滚动过程中的位置,然后控制回到顶部按钮的显示与隐藏
        this.isbacktopbuttonshow =(-position.y)>800

        //2.根据滚动动态显示detailnavbarItem的颜色
        for ( let  i = 0 ; i < this.navbaritemtopY.length ; i ++){

          //其实不用这么复杂的比较，可以直接在navbaritemtopY数组后面加上一个js里面的最大值，就好咯
          if ( (this.currentIndex !== i) && ((i < this.navbaritemtopY.length-1) && (-position.y >= this.navbaritemtopY[i] && -position.y < this.navbaritemtopY[i+1])) ){
            this.currentIndex = i
            console.log(this.currentIndex)
          }
          else if ( (this.currentIndex !== i) && (i ===  this.navbaritemtopY.length-1 && -position.y >= this.navbaritemtopY[this.navbaritemtopY.length-1]) ){
            this.currentIndex = this.navbaritemtopY.length-1
            // console.log(this.navbaritemtopY.length-1)
          }
          this.$refs.detailnavbar.currentIndex = this.currentIndex
        }
      },
      detailnavbaritem(index){
        this.$refs.scroll.scrollTo(0,-this.navbaritemtopY[index],500)
      },
      //回到顶部按钮
      gotop(){
        this.$refs.scroll.scrollTo(0,0)
      },


    },


    deactivated() {

    },
    activated() {

      //次写法无效因为已经设置了keep-alive 除了这个页面，所以activated和的deacvated无效
      /*
      console.log('进入行程详情')   //不打印
      if(localStorage.getItem('guanliyuan')){
        console.log('已登录...')
        this.zhanghao = localStorage.getItem('guanliyuan').split('.')[1]
        this.isLogined = true

        console.log(this.zhanghao)
      }else {
        console.log('未登录...')
        this.isLogined = false
      }
      */
    }
  }
</script>

<style scoped>
  .detail{
    width: 100%;
    position: relative;
    height: 100vh;
    z-index: 99;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0;
    z-index: 98;
    overflow: hidden;
  }


  .detailbottom{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
  }

  .baomingpopup{
    padding: 6px 10px;
    text-align: center;
    font-size: 20px;
    color: #FF4466;
  }
</style>