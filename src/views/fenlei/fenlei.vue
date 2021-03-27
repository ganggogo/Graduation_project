<template>
  <div class="fenlei">
    <fenleinavbar class="fenleinavbar"></fenleinavbar>
    <div class="bodydiv">
      <scroll class="content" ref="scroll">
        <celan :celandata="celandata"></celan>
      </scroll>
      <router-link to="/fenlei/changyongzhuangbei"></router-link>
      <router-link to="/fenlei/nengliangyinliao"></router-link>
      <router-link to="/fenlei/nengliangshipin"></router-link>
      <router-link to="/fenlei/zhangjiajietechan"></router-link>
      <router-link to="/fenlei/xiangxitechan"></router-link>
      <router-link to="/fenlei/minzufushi"></router-link>
      <router-link to="/fenlei/xiangji"></router-link>
      <router-link to="/fenlei/chunzhuang"></router-link>
      <router-link to="/fenlei/xiazhuang"></router-link>
      <router-link to="/fenlei/qiuzhuang"></router-link>
      <router-link to="/fenlei/dongzhuang"></router-link>
      <router-link to="/fenlei/dengshanxie"></router-link>
      <router-link to="/fenlei/fangshaifu"></router-link>
      <router-link to="/fenlei/huwaibeibao"></router-link>
      <router-link to="/fenlei/qita"></router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Celan from "./fenleichild/celan";
  import Scroll from "../../components/common/scroll/scroll";
  import Fenleinavbar from "../../components/common/fenleinavbar/fenleinavbar";
  import Fenleiswiper from "./fenleichild/fenleiswiper";
  export default {
    name: 'fenlei',
    components: {Fenleiswiper, Fenleinavbar, Scroll, Celan,},
    data() {
      return {
        celandata:[
          {name:'常用装备',path:'changyongzhuangbei'},
          {name:'能量饮料',path:'nengliangyinliao'},
          {name:'能量食品',path:'nengliangshipin'},
          {name:'张家界特产',path:'zhangjiajietechan'},
          {name:'湘西特产',path:'xiangxitechan'},
          {name:'民族服饰',path:'minzufushi'},
          {name:'相机',path:'xiangji'},
          {name:'春装',path:'chunzhuang'},
          {name:'夏装',path:'xiazhuang'},
          {name:'秋装',path:'qiuzhuang'},
          {name:'冬装',path:'dongzhuang'},
          {name:'登山鞋',path:'dengshanxie'},
          {name:'防晒服',path:'fangshaifu'},
          {name:'户外背包',path:'huwaibeibao'},
          {name:'其他',path:'qita'},
        ],
      }
    },
    created() {

    },
    activated() {
      this.$refs.scroll.scrollTo(0,scrollY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      scrollY = this.$refs.scroll.scroll.y
    }

  }
</script>

<style scoped>
  .div{
    height: 44px;
    width: 100%;
    overflow: hidden;
  }
  .fenlei{
    height: 100vh;
  }
  .fenleinavbar{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    width: 100%;
    overflow: hidden;
  }
  .bodydiv{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: calc(100vh - 44px - 49px);
    display: flex;
    background-color: rgb(247,247,247);
  }
  .content{
    width: 25%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    margin-top: 5px;
  }
  /*.contentmain{*/
  /*  width: 75%;*/
  /*  position: absolute;*/
  /*  left: 25%;*/
  /*  top: 0;*/
  /*  bottom: 0;*/
  /*  overflow: hidden;*/
  /*  background-color: white;*/
  /*  border-radius: 16px;*/
  /*  margin-top: 5px;*/
  /*  padding-top: 5px;*/
  /*}*/
</style>
