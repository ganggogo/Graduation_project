<template>
  <div class='shangchunhuodong'>
    <shouyechildnavbar3></shouyechildnavbar3>
    <!--右侧栏-->
    <shouyeyoucelanshangchunhuodong  @changelianxiwomenpopup="changelianxiwomenpopup"></shouyeyoucelanshangchunhuodong>
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
  import shouyechildnavbar3 from './shouyechildnavbar3'
  import shouyeyoucelanshangchunhuodong from './shouyeyoucelanshangchunhuodong'
  import Scroll from "../../../components/common/scroll/scroll";
  import Showactivities from "../../../components/contents/showactivities/showactivities";
  import Nomore from "../../../components/common/nomore/nomore";

  import {getallShouyeshangchunhuodongData} from "network/shouye.js"
  export default {
    name: 'shangchunhuodong',
    components:{
      Nomore,
      Showactivities,
      Scroll,
      shouyechildnavbar3,
      shouyeyoucelanshangchunhuodong,
      shouyelianxiwomen
    },
    data() {
      return {
        lianxiwomenshow:false,
        activity:[],

      }
    },
    created() {
      this.getallShouyeshangchunhuodongData()
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
        console.log(11)
      },

      getallShouyeshangchunhuodongData(){
        getallShouyeshangchunhuodongData().then(res=>{
          this.activity = res
        })
      }
    },
    activated() {
      this.$bus.$emit('Rshangchunhuodong')
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