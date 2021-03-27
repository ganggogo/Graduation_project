<template>
  <div class='goodsdetail'>
    <!--商品详情页导航栏-->
    <goodsdetailnavbar></goodsdetailnavbar>
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
    >


      <!--轮播图-->
      <swiper :goods="goods"></swiper>
      <!--title-->
      <goodsdetailtop :goods="goods"></goodsdetailtop>
      <!--权益保障-->
      <goodsdetailquanyi></goodsdetailquanyi>
      <!--info-->
      <goodsdetailinfo :goods="goods" @imgLoad="imgLoad"></goodsdetailinfo>
      <nomore></nomore>
    </scroll>
    <goodsdetailbottombar class="goodsdetailbottombar" @addcart="addcart"></goodsdetailbottombar>
  </div>
</template>

<script>
  import swiper from './goodsdetailchild/swiper'
  import goodsdetailbottombar from './goodsdetailchild/goodsdetailbottombar'
  import shouyelianxiwomen from '../shouye/shouyechild/shouyelianxiwomen'
  import Scroll from "../../components/common/scroll/scroll";
  import goodsdetailnavbar from './goodsdetailchild/goodsdetailnavbar'
  import Shouyeyoucelan from "./shouyeyoucelan";
  import Nomore from "../../components/common/nomore/nomore";
  import goodsdetailtop from "./goodsdetailchild/goodsdetailtop";
  import Goodsdetailquanyi from "./goodsdetailchild/goodsdetailquanyi";
  import Goodsdetailinfo from "./goodsdetailchild/goodsdetailinfo";
  import {Toast} from "vant";

  import {getGoodsDetail} from 'network/goodsdetail.js'

  export default {
    name: 'goodsdetail',
    components: {
      Goodsdetailinfo,
      Goodsdetailquanyi,
      goodsdetailtop,
      swiper,
      Nomore,
      goodsdetailbottombar,
      shouyelianxiwomen,
      Shouyeyoucelan,
      goodsdetailnavbar,
      Scroll,
    },
    data() {
      return {
        //传入的id
        id :'',

        lianxiwomenshow:false,



        goods:{},

      }
    },
    created() {
      //1.保存传入的iid
      this.id = this.$route.params.id
      console.log(this.id)

      getGoodsDetail(this.id).then(res=>{
        console.log(res)
        this.goods = res[0]
      })
    },
    methods:{
      changelianxiwomenpopup(){
        this.lianxiwomenshow = true
      },

      //加入购物车
      addcart(){
        //获取要传入购物车的数据
        const goodscart = {}
        goodscart.img =this.goods.src
        goodscart.title = this.goods.title
        goodscart.price = this.goods.price
        goodscart.id = this.id


        //将数据传入购物车

        //获取数据是异步操作，先要获取数据才能传入数据，所以要通过action来操作
        this.$store.dispatch('addcart',goodscart).then(res=>{
          Toast.success(res)
        })

        //获取要传入数据库的商品数据
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

        const goodsorder = {}
        goodsorder.iid = this.id
        goodsorder.img =this.goods.src
        goodsorder.title = this.goods.title
        goodsorder.price = this.goods.price
        goodsorder.orderdate = orderdate

        this.$axiosgoodsorder.post('/order',goodsorder).then(res=>{
          console.log(res.data)
        })
      },

      imgLoad(){
        this.$refs.scroll.refresh()
      }

    }
  }
</script>

<style scoped>
  .goodsdetail{
    position: relative;
    z-index: 99;
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

  }

  .goodsdetailbottombar{
    position: fixed;
    bottom: 0px;
    left: 0;
    z-index: 999;
  }
  .container{
    padding: 0 10px;
  }
</style>