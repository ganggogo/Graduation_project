<template>
    <div class="container">
      <div class="icon">
        <div class="icon-item" @click="kefu">
          <div class="img"><img src="~assets/imgs/common/kefu.svg" alt=""></div>
          <div class="text">客服</div>
        </div>
<!--        <div class="icon-item">-->
<!--          <div class="img"><img src="~assets/imgs/detail/dianpu.svg" alt=""></div>-->
<!--          <div class="text">店铺</div>-->
<!--        </div>-->
        <div class="icon-item">
          <div class="img collectimg" v-if="iscollected" @click="clickcollect"><img src="~assets/imgs/common/shoucang-active.svg" alt=""></div>
          <div class="img collectimg" v-else @click="clickcollect"><img src="~assets/imgs/common/shoucang.svg" alt=""></div>
          <div class="text">收藏</div>
        </div>
      </div>
      <div class="TEXT">
        <div class="gouwuche" @click="addcart">
          <van-button type="primary" class="mt-login">加入购物车</van-button>
        </div>
        <div class="buy">
          <van-button type="primary" class="mt-login2">立即购买</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'vant'
    export default {
        name: "detailBottomBar",
        data() {
            return {
              iscollected:false
            }
        },
        components: {},
        methods:{
          addcart(){
            this.$emit('addcart')

          },

          clickcollect(){
            this.iscollected = !this.iscollected
            if(this.iscollected){
              Toast.success('收藏成功');
            }else {
              Toast.success('取消收藏')
            }
          },
          kefu(){
            Toast('更多商品信息，请咨询寻游悠悠')
          }
        },
    }
</script>

<style scoped>
  .container{
    height: 49px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
    display: flex;
  }
  .icon{
    display: flex;
    width: 25%;
    justify-content: space-around;
  }
  .icon img{
    width: 28px;
    height: 28px;
  }
  .icon-item{
    /*flex: 1;*/
    /*margin-left: 36px;*/
  }
  .icon-item .text{
    margin-top: -4px;
    font-size: 14px;
    margin-left: 1px;
    padding-bottom: 2px;
  }

  .TEXT{
    display: flex;
    flex: 1;
  }
  .gouwuche{
    width: 36%;
  }
 .mt-login{
   background-color: #F6E102;
   color: white;
   width: 100%;
   height: 100%;
   border: none;
   font-size: 16px;
  }
 .mt-login2{
   background-color: #FF4466;
   color: white;
   width: 100%;
   height: 100%;
   border: none;
   font-size: 16px;
 }


  .buy{
    background-color: #FF4466;
    padding: 5px;
    flex: 1;
  }
  .collectimg{
    margin-left: 2px;
  }
.collectimg img{
  /*width: 26px;*/
}
</style>
