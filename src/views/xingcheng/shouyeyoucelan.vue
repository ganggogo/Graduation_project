<template>
  <div>
    <nut-popup
        position="right"
        v-model="show2"
        :style="{ width }"
    >
      <div class="top">
        <span><img class="youwansvg" src="~assets/imgs/shouye/youwan.svg" alt=""></span>
        寻游户外
      </div>
      <div class="item" @click="toshouye">
        <span>首页</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="toyiliangtian">
        <span>一二三天活动</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="tojingdianchangxian" >
        <span>经典长线</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="toshangchunhuodong">
        <span>赏春活动</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="tozuimeizhaopian">
        <span>最美照片</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="togerenzhongxin">
        <span>个人中心</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>

      <div class="item" @click="togongsidizhi">
        <span>公司地址</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
      <div class="item" @click="tolianxiwomen">
        <span>联系我们</span>
        <span><img src="~assets/imgs/icons/you.svg" alt=""></span>
      </div>
    </nut-popup>
  </div>
</template>

<script>
  export default {
    name: 'shouyeyoucelan',
    data() {
      return {
        //右侧栏数据
        show2:false,
        width: '80%',
      }
    },
    created() {
      this.$bus.$on('shownavxingcheng',()=>{
        this.show2 = true
      })

      this.$bus.$on('Rxingcheng',()=>{
        this.show2 = false
      })
    },
    methods:{
      //去首页
      toshouye(){
        this.$router.replace('/shouye')
      },
      //去一两天
      toyiliangtian(){
        this.$router.push('/shouye/yiliangtian')
      },
      //去经典长线
      tojingdianchangxian(){
        this.$router.push('/shouye/jingdianchangxian')
      },
      //去赏春活动
      toshangchunhuodong(){
        this.$router.push('/shouye/shangchunhuodong')
      },
      //去最美照片
      tozuimeizhaopian(){
        this.$router.push('/shouye/zuimeizhaopian')
      },
      //去个人中心
      togerenzhongxin(){
        this.$router.push('/wode')
      },
      //去公司地址
      togongsidizhi(){
        this.$router.push('/shouye/companyaddress')
      },
      //去联系我们
      tolianxiwomen(){
        this.show2 = false
        this.$emit('changelianxiwomenpopup')
      },
    }
  }
</script>

<style scoped>
  .top{
    width: 100%;
    text-align: center;
    padding: 15px 0;
    color: #FF4466;
    font-size: 23px;
  }
  .youwansvg{
    width: 25px;
    vertical-align: -3px;
  }
  .item{
    padding: 10px 10px;
    border-bottom: 1px solid #F3F3F3;
    color: #FF4466;
  }
.item img{
  width: 23px;
  vertical-align: -5px;
  float: right;
}
</style>