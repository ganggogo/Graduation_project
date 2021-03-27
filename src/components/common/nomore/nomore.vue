<template>
  <div class='nomorebox'>
    <div class="nomore">
      <div class="div1"></div>
      <div class="div2">
        <img src="~assets/imgs/shouye/nomore.svg" alt="">
        <span>没有更多了</span>
      </div>
      <div class="div1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nomore',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .nomorebox{
    display: flex;
    color: #bfbfbf;
    justify-content: center;
    align-items: center;
    margin: 20px 0 10px 0;
  }
  .nomore{
    display: flex;
  }
  .nomore .div1{
    width: 100px;
    height: 0;
    border-bottom: 1px solid #bfbfbf;
    margin-top: 11px;
  }
  .nomore img{
    width: 24px;
    vertical-align: -6px;
  }
</style>