<template>
  <div class="xingcheng">
    <navbar class="shouye_nav">
      <div slot="center">行程</div>
      <div slot="right" class="navright" @click="showNavR">
        <img :src="require('../../assets/imgs/icons/daohang.svg')" alt="">
      </div>
    </navbar>
    <!--首页右侧栏-->
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
    >
      <xingchenglist v-if="this.$store.state.xingchengList.length" class="xingchenglist" :xingchengdata="xingcheng"></xingchenglist>

      <div v-else style="height: 100%;width: 100%"><img style="width: 100%;height: 100%" src="~@/assets/imgs/xingcheng/noorder.png" alt=""></div>
    </scroll>
  </div>
</template>

<script>
  import Shouyelianxiwomen from "./xingchengchild/shouyelianxiwomen";
  import Navbar from "../../components/common/navbar/navbar";
  import Shouyeyoucelan from "./shouyeyoucelan";
  import Scroll from "../../components/common/scroll/scroll";

  import {mapGetters} from 'vuex'
  import Xingchenglist from "./xingchengchild/xingchenglist";
  export default {
    name:'xingcheng',
    components: {
      Xingchenglist,
      Scroll,
      Shouyeyoucelan,
      Navbar,
      Shouyelianxiwomen
    },
    data() {
      return {
        lianxiwomenshow:false,
        showcell:true,
      };
    },
    created() {
      this.$bus.$on('xingchengLoad',()=>{
        this.$refs.scroll.refresh()
      })

      // this.$bus.$on('refreshpage',()=>{
      //   this.$router.go(0)
      // })   //没必要
    },
    mounted() {
    },
    computed:{
      ...mapGetters({
        xingcheng:'xingchengList',
      })
    },
    methods:{
      // position 为关闭时点击的位置
      // instance 为对应的 SwipeCell 实例
      beforeClose({ position, instance }) {
        switch (position) {
          case 'left':
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            instance.close();
            this.showcell = false
              console.log(113131)
            break;
        }
      },


      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },
      //点击唤出右侧栏
      showNavR(){
        this.$bus.$emit('shownavxingcheng')
      },
    },
    activated() {
      this.$bus.$emit('Rxingcheng')

      this.$refs.scroll.refresh()
    },


  };
</script>

<style scoped>
  .xingcheng{
    width: 100%;
    position: relative;
    height: 100vh;
    background-color: #F1F2F6;
  }
  .shouye_nav{
    background-color: #FF4466;
    color: white;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .navright{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navright img{
    width: 25px;
    height: 25px;
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



  .xingchenglist{
    margin-top: 10px;
  }
</style>