<template>
  <div class='zuimeizhaopian'>
    <shouyechildnavbar4></shouyechildnavbar4>
    <!--右侧栏-->
    <shouyeyoucelanzuimeizhaopian @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelanzuimeizhaopian>
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
    >
      <van-swipe indicator-color="#FF4466" autoplay="1500" style="height: 200px;" vertical >
        <van-swipe-item v-for="(item,index) in zuimeiphotoswiper ":key = item.id>
          <img style="height: 200px;width: 100%" :src="item.src" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="box">
        <div class="boxitem" v-for="(item,index) in zuimeizhaopian" :key="item.id">
          <div class="sceneryImgContent">
            <img preview = '1' :src="item.src" :preview-text="item.title" alt="">
          </div>
        </div>
      </div>
      <nomore></nomore>
    </scroll>
  </div>
</template>

<script>
  import shouyelianxiwomen from './shouyelianxiwomen'
  import shouyechildnavbar4 from './shouyechildnavbar4'
  import shouyeyoucelanzuimeizhaopian from './shouyeyoucelanzuimeizhaopian'
  import Scroll from "../../../components/common/scroll/scroll";
  import Nomore from "../../../components/common/nomore/nomore";

  import {getswiperData,getboxData} from 'network/zuimeiphoto.js'
  export default {
    name: 'zuimeizhaopian',
    components:{
      Nomore,
      Scroll,
      shouyelianxiwomen,
      shouyechildnavbar4,
      shouyeyoucelanzuimeizhaopian
    },
    data() {
      return {
        lianxiwomenshow:false,
        zuimeiphotoswiper:[],
        zuimeizhaopian:[]
      }
    },
    created() {
      this.getswiperData()
      this.getboxData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },

      //获取swiper的数据
      getswiperData(){
        getswiperData().then(res=>{
          this.zuimeiphotoswiper = res
        })
      },
      //获取box数据’

      getboxData(){
        getboxData().then(res=>{
          this.zuimeizhaopian = res
        })
      }
    },
    activated() {
      this.$bus.$emit('Rzuimeizhaopian')
    }
  }
</script>

<style scoped>
  .zuimeizhaopian{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .box{
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1%;
  }
  .boxitem{
    width: 48%;
    height: 280px;
    margin-bottom: 10px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  .boxitem img{
    width: 100%;
    height: 280px;
  }
</style>