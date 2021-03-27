<template>
  <div class='swiper'>
    <van-swipe :autoplay="1500" :loop="true" :width="350" :height="280" indicator-color="#FF4466">
      <van-swipe-item  v-for="(item,index) in goods.swiper" :key="index"><img :src="item.src" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
.swiper img{
  width: 100%;
  height: 100%;
}
  .van-swipe-item{
    margin-left: 8px;
  }
</style>