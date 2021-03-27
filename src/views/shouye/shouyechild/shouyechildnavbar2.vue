<template>
  <div class='detailnavbar'>
    <!--navbar-->
    <navbar class="detailnav">
      <div slot="left" class="detailnav_left" @click="detailnavback">
        <img src="~assets/imgs/wode/fanhui.svg" alt="">
      </div>
      <div slot="center" class="denglu">经典长线活动</div>
      <div slot="right" class="detailnav_left" @click="showNavR2">
        <img src="~assets/imgs/shouye/daohang.svg" alt="">
      </div>
    </navbar>


  </div>
</template>

<script>
  import navbar from "../../../components/common/navbar/navbar"
  export default {
    name: 'detailnavbar',
    data() {
      return {}
    },
    components:{
      navbar
    },
    methods:{
      //唤出右侧栏
      showNavR2(){
        this.$bus.$emit('shownavjingdianchangxian')
      },
      //详情页nav返回按钮
      detailnavback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.detailnavbar{
  background-color: #FF4466;
  color: white;
}
.detailnav_left img{
  width: 23px;
  margin-top: 10px;
}
</style>