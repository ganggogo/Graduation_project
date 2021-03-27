<template>
  <div class='goodsdetailtop'>
    <div>
      <span class="tag">好价促销</span>{{goods.title}}
      <div class="price">
        <span>￥{{goods.price}}</span><span>￥{{goods.oldprice}}</span>
        <span>销量:{{goods.cell}}</span>
      </div>
      <p><span>免邮费</span><span>湖南张家界</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsdetailtop',
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
.goodsdetailtop{
  padding: 10px 20px;
  letter-spacing: 3px;
  line-height: 25px;
  border-bottom: 10px solid #EAEAEA;
}
  .tag{
    display: inline-block;
    padding:2px 8px;
    background-color: #FF4466;
    color: white;
    border-radius: 6px;
    line-height: 25px;
    text-align: center;

    margin-right: 8px;
    letter-spacing: 0px;
  }
  p{
    margin: 8px 0 4px 0;
    color: #ABABAB;
    font-size: 14px;
  }
  p span{
    display: inline-block;
  }
p span:nth-of-type(2){
  float: right;
}
  .price{
    padding: 8px 0;
  }
  .price span:nth-of-type(1){
    padding: 4px 8px;
    background-color: rgba(255,68,102,0.8);
    color: white;
    font-size: 24px;
    border-radius: 20px;
    line-height: 36px;
    text-align: center;
    margin-right: 4px;
    letter-spacing: 2px;
  }
  .price span:nth-of-type(2){
    color: #ABABAB;
    font-size: 14px;
    text-decoration-line: line-through;
  }
  .price span:nth-of-type(3){
    color: #ABABAB;
    font-size: 14px;
    float: right;
  }
</style>