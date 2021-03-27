<template>
  <div class='goodsdetailquanyi'>
    <div class="left">
      <img src="~/assets/imgs/goodsdetail/duigou.svg" alt=""><span>七天无理由退货</span>
    </div>
    <div class="center">
      <img src="~/assets/imgs/goodsdetail/duigou.svg" alt=""><span>延误必赔</span>
    </div>
    <div class="right">
      <img src="~/assets/imgs/goodsdetail/duigou.svg" alt=""><span>退货补运费</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsdetailquanyi',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .goodsdetailquanyi{
    display: flex;
    color: #ABABAB;
    font-size: 13px;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 10px solid #EAEAEA;
  }
.goodsdetailquanyi img{
  width: 26px;
  vertical-align: -8px;
}
</style>