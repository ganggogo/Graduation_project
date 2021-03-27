<template>
  <div class='gouwuche'>
    <navbar class="shouye_nav">
      <div slot="center">购物车({{length}})</div>
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
      <cart-good-list v-if="this.$store.state.cartList.length" class="cartgoodlist"></cart-good-list>
      <!--测试数据临时-->

      <div v-else class="emptycart">
        <img src="~assets/imgs/cart/emptycart.png" alt="">
        <div class="emptycarttext" @click="goshop"><span>去逛逛</span></div>
      </div>
    </scroll>


    <!--bottombar-->
    <CartBottomBar class="detailbottombar"></CartBottomBar>
  </div>
</template>

<script>
  import Shouyelianxiwomen from "./gouwuchechild/shouyelianxiwomen";
  import Navbar from "../../components/common/navbar/navbar";
  import Shouyeyoucelan from "./shouyeyoucelan";

  import {mapGetters} from 'vuex'
  import Scroll from "../../components/common/scroll/scroll";
  import CartBottomBar from "./gouwuchechild/CartBottomBar";
  import CartGoodList from "./gouwuchechild/CartGoodList";
  export default {
    name: 'gouwuche',
    components: {
      CartBottomBar,
      Scroll,
      Shouyeyoucelan,
      Navbar,
      Shouyelianxiwomen,
      CartGoodList
    },
    data() {
      return {
        lianxiwomenshow:false
      }
    },
    computed:{
      //两种语法
      // ...mapGetters(['cartLength','cartList'])
      ...mapGetters({
        length:'cartListLength',
        cartList:'cartList'
      })
    },
    created() {
      this.$bus.$on('gouwucheLoad',()=>{
        this.$refs.scroll.refresh()
      })
    },

    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },
      //点击唤出右侧栏
      showNavR(){
        this.$bus.$emit('shownavgouwuche')
      },

      goshop(){
        this.$router.replace('/fenlei')
      }
    },
    activated() {
      this.$bus.$emit('Rgouwuche')
      if ( this.$store.state.cartList.length ){
        this.$refs.scroll.refresh()
      }

    }
  }
</script>

<style scoped>
  .gouwuche{
    height: 100vh;
    position: relative;
    background-color: #F1F2F6;
  }
  .shouye_nav{
    background-color: #FF4466;
    color: white;
  }

  .content{
    position: relative;
    overflow: hidden;
    height: calc(100% - 44px - 40px - 49px);
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
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .detailbottombar{
    position: absolute;
    bottom: 49px;
    left: 0;
    z-index: 999;
  }

  .cartgoodlist{
    margin: 10px;
    overflow: hidden;
  }


  .emptycart{
    width: 100%;
    height: calc(100% - 44px - 49px);
    background-color: rgb(242,242,242);
  }
  .emptycart img{
    width: 100%;
  }
  .emptycarttext{
    font-size: 16px;
    margin-top: 10px;
    color: rgb(111,104,104);
  }
  .emptycarttext span{
    margin: 0 auto;
    display: block;
    width: 80px;
    height: 36px;
    background-color: rgb(248,244,244);
    text-align: center;
    line-height: 36px;
    border: solid 0.5px rgb(208,208,208);

  }

</style>