<template>
  <div>
    <div class="pbox">
      <a :href="'tel:' ">
        <div class="p">
          <img :src="require('@/assets/imgs/icons/dianhua.svg')" alt="">
          <span>电话:</span>
          <span>19971170797</span>
          <span>(寻游闪电)</span>
        </div>
      </a>
      <a :href="'tel:' ">
        <div class="p">
          <img :src="require('@/assets/imgs/icons/dianhua.svg')" alt="">
          <span>电话:</span>
          <span>13100612517</span>
          <span>(寻游悠悠)</span>
        </div>
      </a>
      <a :href="'tel:' ">
        <div class="p">
          <img :src="require('@/assets/imgs/icons/dianhua.svg')" alt="">
          <span>电话:</span>
          <span>17343665940</span>
          <span>(寻游喵喵)</span>
        </div>
      </a>
      <a :href="'tel:' ">
        <div class="p">
          <img :src="require('@/assets/imgs/icons/dianhua.svg')" alt="">
          <span>电话:</span>
          <span>19945896213</span>
          <span>(寻游大疆)</span>
        </div>
      </a>
    </div>
    <div class="img">
      <div class="sceneryImgContent">
        <img preview = '1' :src="require('@/assets/imgs/lianxiwomen/1.jpg')" alt="">
        <div class="text1">寻游苗苗</div>
      </div>
      <div class="sceneryImgContent">
        <img preview = '2' :src="require('@/assets/imgs/lianxiwomen/2.jpg')" alt="">
        <div class="text1">寻游聪聪</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shouyelianxiwomen',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .pbox .p{
    display: flex;
    padding: 8px 3%;
    letter-spacing: 2px;
  }
  .pbox .p img{
    width: 20px;
    margin-right: 5px;
  }
  .pbox .p span:nth-of-type(1){
    color: black;
  }
  .pbox .p span:nth-of-type(3){
    color: #ABABAB;
    font-size: 13px;
  }
  .img{
    width: 94%;
    padding: 2px 2%;
    display: flex;
  }
  .img img{
    position: relative;
    z-index: 999999999999999999;
  }
  .sceneryImgContent{
    position: relative;
    margin-bottom: 8px;
    padding-bottom: 12px;
  }
  .text1{
    position: absolute;
    top:200px;
    left: 70px;
  }
  .sceneryImgContent img{
    height: 200px;
    width: 200px;
  }
</style>