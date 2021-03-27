<template>
    <div class="goods-item" @click="toDetail">
      <img v-lazy="showImg" alt="" class="mainImg" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span>￥</span>
        <span class="price">{{goodsItem.price}}.00</span>
        <span class="collectsvg"><img src="~assets/imgs/common/collect.svg" alt=""></span>
        <span class="collect">{{goodsItem.shoucang}}</span>
      </div>
      <div class="lijigoumai">
        <van-button type="primary" class="mt-login">立即购买</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodListItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
        },
        data() {
            return {}
        },
        component: {},
        computed:{
          showImg(){
            return this.goodsItem.src || this.goodsItem.show.img   //注意顺序问题
          }
        },
        methods:{
          imgLoad(){
            // this.$bus.$emit('itemImgLoad')
            //这里如果详情页也复用了goodList组件，那么其实详情页推荐里面的图片加载完后是不需要在首页执行一次scroll的refresh函数的
            if ( this.$route.path.includes('/shouye') ){
              this.$bus.$emit('homeItemImgLoad')
            }else if(this.$route.path.includes('/detail')){
              this.$bus.$emit('detailItemImgLoad')
            }
          },
          toDetail(){
            this.$router.push("/goodsdetail/" + this.goodsItem._id )
          }
        },
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3), 0 0 6px rgba(0, 0, 0, .1);

  }
  .goods-item .mainImg{
    width: 100%;
    border-radius: 5px;
    border: 1px solid #FF4466;
  }
  .goods-item .goods-info{
    text-align: center;
  }
  .goods-item .goods-info p{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-item .goods-info .price{
    color: #FF4466;
    margin-right: 20px;
  }
  .goods-item .goods-info .collectsvg img{
    margin-top: 4px;
    display: inline-block;
    width: 14px;
    height: 14px;
  }


  .goods-item .mainImg{
    height: 200px;
  }
  .mt-login{
    background-color: #FF4466;
    color: white;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 5px;
    border: none;
    font-size: 13px;
    height: 30px;
  }
</style>
