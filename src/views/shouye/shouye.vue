<script src="../../network/request.js"></script>
<template>
  <div class='shouye'>
    <!--首页导航栏-->
    <navbar class="shouye_nav">
      <div slot="left" class="navleft" @click="showNavL">
        <img :src="require('../../assets/imgs/icons/gerenzhongxin.svg')" alt="" v-if="!isLogined">
        <img :src="require('../../assets/imgs/wode/logined.png')" alt="" v-else>
      </div>
      <div slot="center">寻游户外</div>
      <div slot="right" class="navright" @click="showNavR">
        <img :src="require('../../assets/imgs/icons/daohang.svg')" alt="">
      </div>
    </navbar>
    <!--首页公告栏-->
    <nut-noticebar
    >
      疫情期间，密切关注疫情防控形式，全力做好做实监测排查，坚决保障公共卫生安全，请游客严格遵守疫情防控命令!
    </nut-noticebar>
    <!--左侧栏-->
    <shouyezuocelan ></shouyezuocelan>
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
        @pullingUp = "contentPullingUp"
        @scroll="contentScroll"
    >
      <!--首页轮播图-->
      <shouye-swiper :banners="banners" ></shouye-swiper>
      <!--首页一二三天活动-->
      <showactivitiesnavbar1 @click.native="toyiliangtian"></showactivitiesnavbar1>
      <showactivities class="activitylist1" :activity="activitylist1"></showactivities>
      <!--首页经典长线活动-->
      <showactivitiesnavbar2 @click.native="tojingdianchangxian"></showactivitiesnavbar2>
      <showactivities class="activitylist2" :activity="activitylist2"></showactivities>
      <!--赏春活动-->
      <showactivitiesnavbar3 @click.native="toshangchunhuodong"></showactivitiesnavbar3>
      <showactivities class="activitylist3" :activity="activitylist3"></showactivities>
      <!--最美照片-->
      <showactivitiesnavbar4 @click.native="tozuimeizhaopian"></showactivitiesnavbar4>
      <shouyezuimeizhaopian  :zuimeizhaopianlist = zuimeizhaopianlist></shouyezuimeizhaopian>
      <div class="jiange"></div>
      <!--猜你喜欢活动-->
      <showactivitiesnavbar5 @click.native="tocainixihuan"></showactivitiesnavbar5>
      <showactivities class="activitylist4" :activity="activitylist4"></showactivities>
      <!--联系我们-->
      <showactivitiesnavbar6></showactivitiesnavbar6>
      <shouyelianxiwomen></shouyelianxiwomen>
      <div class="jiange"></div>
      <!--公司地址-->
      <showactivitiesnavbar7></showactivitiesnavbar7>
      <span class="gongsidizhiname"><strong>公司地址:</strong></span>
      <span class="gongsidizhi" @click="chakanditu"><strong>湖南省张家界市吉首大学张家界校区</strong></span>
      <span>（点击查看地图）</span>
      <img
          @click="chakanditu"
          style="width: 100%;height: auto"
          src="~assets/imgs/shouye/gongsidizhi.png"
      >
      <!--没有更多了-->
      <nomore></nomore>

      <!--技术支持-->
      <div class="jishuzhichi">
        <center>
          <address>技术支持:寻游户外</address>
        </center>
      </div>
    </scroll>
    <!--回到顶部-->
    <back-top @click.native="gotop" v-show="isbacktopbuttonshow"></back-top>
  </div>
</template>

<script>

  import Navbar from "../../components/common/navbar/navbar";
  import Scroll from "../../components/common/scroll/scroll";
  import BackTop from "../../components/common/backtop/backtop";
  import ShouyeSwiper from "./shouyechild/shouyeswiper";
  import Showactivitiesnavbar1 from "../../components/contents/showactivities/showactivitiesnavbar1";
  import Showactivitiesnavbar2 from "../../components/contents/showactivities/showactivitiesnavbar2";
  import Showactivitiesnavbar3 from "../../components/contents/showactivities/showactivitiesnavbar3";
  import Showactivitiesnavbar4 from "../../components/contents/showactivities/showactivitiesnavbar4";
  import Showactivitiesnavbar5 from "../../components/contents/showactivities/showactivitiesnavbar5";
  import Showactivitiesnavbar6 from "../../components/contents/showactivities/showactivitiesnavbar6";
  import Showactivitiesnavbar7 from "../../components/contents/showactivities/showactivitiesnavbar7";
  import Showactivities from "../../components/contents/showactivities/showactivities";
  import Shouyezuimeizhaopian from "./shouyechild/shouyezuimeizhaopian";
  import Shouyelianxiwomen from "./shouyechild/shouyelianxiwomen";
  import Shouyeyoucelan from "./shouyechild/shouyeyoucelan";
  import Shouyezuocelan from "./shouyechild/shouyezuocelan";
  import Nomore from "../../components/common/nomore/nomore";
  import shouyelianxiwomen from "./shouyechild/shouyelianxiwomen"

  //获取数据的函数
  import{
    getShouyeSwiperData,
    getShouyeYiLiangSanData,
    getShouyejingdianchangxianData,
    getShouyeshangchunhuodongData,
    getShouyezuimeizhaopianData,
    getcainixihuanData
  } from 'network/shouye.js'
  export default {
    name: 'shouye',
    components: {
      shouyelianxiwomen,
      Nomore,
      Shouyezuocelan,
      Shouyeyoucelan,
      Shouyelianxiwomen,
      Shouyezuimeizhaopian,
      Showactivities,
      Showactivitiesnavbar1,
      Showactivitiesnavbar2,
      Showactivitiesnavbar3,
      Showactivitiesnavbar4,
      Showactivitiesnavbar5,
      Showactivitiesnavbar6,
      Showactivitiesnavbar7,
      ShouyeSwiper,
      BackTop,
      Scroll,
      Navbar,
    },
    data() {
      return {
        lianxiwomenshow:false,
        //记录离开主页时的位置
        scrollY:0,
        isbacktopbuttonshow:false,
        //首页轮播图
        banners:[],
        //首页一二三天活动
        activitylist1:[],
        activitylist2:[],
        activitylist3:[],
        zuimeizhaopianlist:[],
        activitylist4:[],

        isLogined:false
      }
    },
    created() {
      this.getShouyeSwiperData()
      this.getShouyeYiLiangSanData()
      this.getShouyejingdianchangxianData()
      this.getShouyeshangchunhuodongData()
      this.getShouyezuimeizhaopianData()
      this.getcainixihuanData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },
      //去一两天
      toyiliangtian(){
        this.$router.push('/shouye/yiliangtian')
      },
      //去经典长线
      tojingdianchangxian(){
        this.$router.push('/shouye/jingdianchangxian')
      },
      //去赏春活动
      toshangchunhuodong(){
        this.$router.push('/shouye/shangchunhuodong')
      },
      //去最美照片
      tozuimeizhaopian(){
        this.$router.push('/shouye/zuimeizhaopian')
      },
      //去猜你喜欢
      tocainixihuan(){
        this.$router.push('/shouye/cainixihuan')
      },
      //点击唤出左侧栏
      showNavL() {
       this.$bus.$emit('shownav1')
      },
      //点击唤出右侧栏
      showNavR(){
        this.$bus.$emit('shownavR1')
      },
      //回到顶部按钮
      gotop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      //上拉加载更多
      contentPullingUp(){
        console.log('上拉加载更多...')
      },
      //检测内容滚动过程中的位置,然后控制回到顶部按钮的显示与隐藏
      contentScroll(position){
        //1.回到顶部按钮显示
        this.isbacktopbuttonshow =(-position.y)>800
      },
      //查看公司位置地图
      chakanditu(){
        this.$router.push('/shouye/companyaddress')
      },

      //获取数据

      //获取首页轮播图数据
      getShouyeSwiperData(){
        getShouyeSwiperData().then(res=>{
          this.banners = res
        })
      },
      //获取首页一两三数据
      getShouyeYiLiangSanData(){
        getShouyeYiLiangSanData().then(res=>{
          this.activitylist1 = res
        })
      },
      //获取首页经典长线数据
      getShouyejingdianchangxianData(){
        getShouyejingdianchangxianData().then(res=>{
          this.activitylist2 = res
        })
      },
      //获取首页赏春活动数据
      getShouyeshangchunhuodongData(){
        getShouyeshangchunhuodongData().then(res=>{
          this.activitylist3 = res
        })
      },
      //获取首页最美照片数据
      getShouyezuimeizhaopianData(){
        getShouyezuimeizhaopianData().then(res=>{
          this.zuimeizhaopianlist = res
        })
      },
      //获得猜你喜欢数据
      getcainixihuanData(){
        getcainixihuanData().then(res=>{
          this.activitylist4 = res
        })
      }
    },

    //记录离开主页时主页的位置
    activated() {
      this.$refs.scroll.scrollTo(0,scrollY,0)
      this.$refs.scroll.refresh()

      this.$bus.$emit('Rshouye')


      if(localStorage.getItem('guanliyuan')){
        console.log('已登录...')
        this.zhanghao = localStorage.getItem('guanliyuan').split('.')[1]
        this.isLogined = true

        console.log(this.zhanghao)
      }else {
        console.log('未登录...')
        this.isLogined = false
      }


    },
    deactivated() {
      scrollY = this.$refs.scroll.scroll.y
    }
  }
</script>

<style scoped>

  .shouye{
    height: 100vh;
    position: relative;
  }
.shouye_nav{
  background-color: #FF4466;
  color: white;
}

.content{
  position: absolute;
  top: 84px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.navleft,.navright{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navleft img,.navright img{
  width: 25px;
  height: 25px;
}
.navleft img:nth-of-type(1){
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
  .activitylist1{
    border-bottom: 10px solid #F6F6F6;
  }
.activitylist2{
  border-bottom: 10px solid #F6F6F6;
}
.activitylist3{
  border-bottom: 10px solid #F6F6F6;
}
.activitylist4{
  border-bottom: 10px solid #F6F6F6;
}
.jiange{
  width: 100%;
  height: 10px;
  background-color: #F6F6F6;
}
  .gongsidizhiname{
    display: inline-block;
    padding: 5px;
    font-size: 20px;
  }
  .gongsidizhi{
    color: #0081E5;
  }

  .jishuzhichi{
    margin-top: 10px;
    font-size: 14px;
    color: #8C8C8C;
  }


</style>