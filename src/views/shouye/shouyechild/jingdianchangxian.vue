<template>
  <div class='jingdianchangxian'>
    <shouyechildnavbar2></shouyechildnavbar2>
    <!--右侧栏-->
    <shouyeyoucelanjingdianchangxian @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelanjingdianchangxian>
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
  import shouyechildnavbar2 from './shouyechildnavbar2'
  import shouyeyoucelanjingdianchangxian from './shouyeyoucelanjingdianchangxian'
  import Shouyelianxiwomen from "./shouyelianxiwomen";
  import Showactivities from "../../../components/contents/showactivities/showactivities";
  import Scroll from "../../../components/common/scroll/scroll";
  import Nomore from "../../../components/common/nomore/nomore";

  import {getShouyealljingdianchangxianData} from 'network/shouye.js'
  export default {
    name: 'jingdianchangxian',
    components:{
      Nomore,
      Showactivities,
      shouyechildnavbar2,
      shouyeyoucelanjingdianchangxian,
      Shouyelianxiwomen,
      Scroll
    },
    data() {
      return {
        lianxiwomenshow:false,

        activity:[],
      }
    },
    created() {
      this.getShouyealljingdianchangxianData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
        console.log(11)
      },
      getShouyealljingdianchangxianData(){
        getShouyealljingdianchangxianData().then(res=>{
          this.activity = res
        })
      }
    },
    activated() {
      this.$bus.$emit('Rjingdianchangxian')
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