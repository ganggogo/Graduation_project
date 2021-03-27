<template>
  <div class='yiliangtian'>
    <shouyechildnavbar1></shouyechildnavbar1>
    <!--右侧栏-->
    <shouyeyoucelanyiliangtian @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelanyiliangtian>
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
      <showactivities class="activities" :activity="activity"></showactivities>
      <nomore></nomore>
    </scroll>
  </div>
</template>

<script>
  import shouyechildnavbar1 from "./shouyechildnavbar1";
  import shouyeyoucelanyiliangtian from "./shouyeyoucelanyiliangtian";
  import Shouyelianxiwomen from "./shouyelianxiwomen";
  import Scroll from "../../../components/common/scroll/scroll";
  import Showactivities from "../../../components/contents/showactivities/showactivities";
  import Nomore from "../../../components/common/nomore/nomore";


  import {getShouyeAllYiLiangSanData} from 'network/shouye.js'
  export default {
    name: 'yiliangtian',
    components:{
      Nomore,
      Showactivities,
      Scroll,
      Shouyelianxiwomen,
      shouyeyoucelanyiliangtian,
      shouyechildnavbar1
    },
    data() {
      return {
        //联系我们弹出框
        lianxiwomenshow:false,

        activity:[],
      }
    },
    created() {
      this.getShouyeAllYiLiangSanData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },

      getShouyeAllYiLiangSanData(){
        getShouyeAllYiLiangSanData().then(res=>{
          this.activity = res
        })
      }
    },
    activated() {
      this.$bus.$emit('Ryiliangtian')
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
</style>