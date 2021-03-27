<template>
  <div class='showactivitiesitem' @click="todetail">
<!--    <img class="mainimg" :src="activityitem.src">-->
    <img v-lazy="showImg" alt="" class="mainimg" >
    <div class="activity_info">
      <p>{{activityitem.text}}</p>
      <div class="bot">
        <span class="price">{{activityitem.price}}</span>
        <span class="localicon"><img :src="activityitem_icon" alt=""></span>
        <span class="localname">{{activityitem.localname}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'showactivitiesitem',
    props:{
      activityitem:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data() {
      return {
        activityitem_icon:require('@/assets/imgs/icons/local.svg')
      }
    },
    computed:{
      showImg(){
        return this.activityitem.src || this.goodsItem.show.img   //注意顺序问题
      }
    },
    methods:{
      //去详情页（临时）
      todetail(){
        this.$router.push('/xingchengdetail/' + this.activityitem._id)
      }
    }
  }
</script>

<style scoped>
  .showactivitiesitem{
    width: 48%;
    height: 340px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding-bottom: 5px;
  }
  .mainimg{
    width: 100%;
    height: 78%;
    border-radius: 5px;
    border: 1px solid #FF4466;
  }
  .activity_info{
    width: 100%;
    height: 22%;
  }
  .activity_info p {
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size:14px;
  }
  .activity_info .bot{
    height: 42%;
    width: 70%;
    padding: 0 15%;
    margin: 8px 0;
  }
  .activity_info .bot .price{
    color: #FF4466;
  }
  .activity_info .bot .localicon{
    vertical-align: -2px;
    margin-left: 10%;
  }
  .activity_info .bot .localicon img{
    width: 18px;
  }
  .activity_info .bot .localname{
    font-size: 14px;
    color: #6B6B6B;
  }
</style>