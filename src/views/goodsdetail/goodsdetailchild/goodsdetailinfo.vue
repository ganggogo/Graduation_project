<template>
  <div class='goodsdetailinfo'>
    <van-tabs v-model="active">
      <van-tab title="图文详情">
        <img :src="goods.dsc" @load="imgLoad" alt="">
      </van-tab>
      <van-tab title="商品参数">
        <img :src="goods.arg"@load="imgLoad" alt="">
      </van-tab>
<!--      <van-tab title="热卖推荐">-->
<!--        <p>二姐家的大外甥十六岁，今年中考，金榜题名，从刘家馆子镇考上了梨bai树县一中，做为舅舅，我无比的高兴，因为我也算是看着你长大的，不会忘记你刚出生时的那双眼睛，萌萌有神，娇小而惹人怜爱，当时爸爸更高兴，第一次当姥爷，每天晚上都做饭兴冲冲往医院送；-->
<!--          　　-->
<!--          　-->
<!--          　　如今，你长大了，离开父母的怀抱，出飞了，二姐在梨树一中附近给你租了70平米的楼房，我昨晚给二姐打电话说，怎么租这么大的房子，我们当年上高中都是住校或合租，二姐淡淡地说，这不是多花点钱，给孩子一个好的学习环境，希望孩子有出息吗；-->
<!--          　　-->
<!--          　　是啊，你长大了，成为高中生了，从温暖的家庭到一个人在外面寄宿，外部环境发生了质的改变，对你来说，是考验，亦是成长；</p>-->

<!--      </van-tab>-->
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: 'goodsdetailinfo',
    data() {
      return {
        active:0
      }
    },
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
.goodsdetailinfo{
  padding: 5px 10px;
}
.goodsdetailinfo img{
  width: 100%;
}
</style>