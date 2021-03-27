<template>
  <div class='cainixihuan'>
    <shouyechildnavbar5></shouyechildnavbar5>
    <!--右侧栏-->
    <shouyeyoucelancainixihuan @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelancainixihuan>
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
  import shouyelianxiwomen from './shouyelianxiwomen'
  import shouyeyoucelancainixihuan from './shouyeyoucelancainixihuan'
  import shouyechildnavbar5 from './shouyechildnavbar5'
  import Scroll from "../../../components/common/scroll/scroll";
  import Showactivities from "../../../components/contents/showactivities/showactivities";
  import Nomore from "../../../components/common/nomore/nomore";

  import{getallcainixihuanData} from 'network/shouye.js'

  export default {
    name: 'cainixihuan',
    components:{
      Nomore,
      Showactivities,
      Scroll,
      shouyelianxiwomen,
      shouyeyoucelancainixihuan,
      shouyechildnavbar5
    },
    data() {
      return {
        lianxiwomenshow : false,
        activity:[],

      }
    },
    created() {
      this.getallcainixihuanData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },

      getallcainixihuanData(){
        getallcainixihuanData().then(res=>{
          this.activity = res
        })
      }
    },
    activated() {
      this.$bus.$emit('Rcainixihuan')
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