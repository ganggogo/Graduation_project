<template>
  <div class="box">
    <van-swipe
        :loop="true"
        :width="300"
        touchable
        :autoplay="2000"
        :show-indicators='false'
        :duration="1000"
        class="zuimeicontainer">
      <van-swipe-item
          class = item
          v-for="(item, index) in zuimeizhaopianlist" :key="item.id"
      >
        <img :src="item.src" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'shouyezuimeizhaopian',
    props:{
      zuimeizhaopianlist:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data() {
      return {}
    },
    methods:{
      //最美照片左滑更多
      jump() {
        location.href = 'http://www.jd.com';
      },
    }
  }
</script>

<style scoped>
  .box{
    padding: 0 3%;
    width: 100%;
    height: 300px;
  }
  .zuimeicontainer{
    height: 100%;
    width: 94%;
  }
  .zuimeicontainer img{
    height: 300px;
    width: 300px;
    /*margin-right: 5px;*/
    margin-bottom: 5px;
  }
  .item{
    margin-right: 15px;
  }
</style>