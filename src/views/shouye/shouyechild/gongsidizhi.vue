<template>
  <div>
    <nav-bar class="gongsidizhinav">
      <div slot="left" @click="backshouye">
        <img src="~assets/imgs/common/back.svg" alt="" class="gongsidizhiback">
      </div>
      <div slot="center" class="centerslot">公司地址</div>
    </nav-bar>

    <el-amap vid="amapDemo" class="mmaapp">
    </el-amap>
  </div>
</template>

<script>
  import ElAmap from "./shouyeditu"
  import NavBar from "../../../components/common/navbar/navbar";
  export default {
    name: 'gongsidizhi',
    data() {
      return {}
    },
    components:{
      ElAmap,
      NavBar
    },
    methods:{
      backshouye(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .mmaapp{
    width: 100%;
    height: 300px;
  }
  .gongsidizhiback{
    margin-top: 12px;
    width: 25px;
  }
  .gongsidizhinav{
    background-color: #FF4466;
  }
  .centerslot{
    color: white;
  }
</style>