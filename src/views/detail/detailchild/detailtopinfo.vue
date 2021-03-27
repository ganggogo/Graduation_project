<template>
  <div class='detailtopinfo'>
    <div class="top">
      {{detailtopinfo.text}}
    </div>
    <div class="xiamian">
      费用<span class="price">￥{{detailtopinfo.price}}</span>/人
      <span class="pricetag">{{detailtopinfo.pricetag}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailtopinfo',
    data() {
      return {

      }
    },
    props:{
      detailtopinfo:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .detailtopinfo{
    padding: 10px 10px;
    margin-bottom: 8px;
  }
  .top{
    font-size: 21px;
    letter-spacing: 3px;
  }
  span{
    display: inline-block;
  }
  .price{
    color: #FF4466;
    font-size: 22px;
    vertical-align: -3px;
    padding: 0 5px;
  }
  .pricetag{
    color: white;
    background-color: #FF4466;
    border-radius: 4px;
    padding: 3px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    margin-left: 5px;
  }
.xiamian{
  margin-top: 6px;
  color: #909090;
}
</style>