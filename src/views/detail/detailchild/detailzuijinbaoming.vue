<template>
  <div class='detailzuijinbaoming'>
    <span>最近报名:</span>
    <div class="imgbox">
      <img v-for="item in imgs" :key="item" :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailzuijinbaoming',
    data() {
      return {
        imgs:[
          require("@/assets/imgs/detail/zuijinbaoming/1.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/2.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/3.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/4.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/5.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/6.jpeg"),
          require("@/assets/imgs/detail/zuijinbaoming/7.jpeg"),

        ]
      }
    }
  }
</script>

<style scoped>
.detailzuijinbaoming{
  padding: 16px 10px;
  display: flex;
}
.detailzuijinbaoming span{
  display: inline-block;
  margin-top: 7px;
}
  .detailzuijinbaoming img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 6px;
  }
</style>