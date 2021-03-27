<template>
    <div>
      <nav-bar>
        <div slot="left" @click="detailnavbarback">
          <img src="~assets/imgs/common/detailback.svg" alt="" class="detailnavbarimg">
        </div>
        <div slot="center" class= "detailnav">
          <div
            v-for="(item,index) in title"
            class="detailnavitem"
            @click = "detailnavbaritem(index)"
            :class="{active:currentIndex === index}"
          >
            <span>{{item}}</span>
            <div
                class="underline"
                :class="{divactive:currentIndex === index}"
            >
            </div>
          </div>
        </div>
        <div slot="right">
          <img class="detailnavbarimg" src="~assets/imgs/detail/daohang.svg" alt="" @click="showNavR">
        </div>
      </nav-bar>
    </div>
</template>

<script>

    import NavBar from "components/common/navbar/navbar";
    export default {
        name: "DetailNavBar",
      components: {NavBar},
      data() {
            return {
              title:['活动介绍','行程安排','费用说明','注意事项'],
              currentIndex:0
            }
        },
        methods:{
          //点击唤出右侧栏
          showNavR(){
            this.$bus.$emit('shownavdetail')
          },

          detailnavbaritem(index){
            this.currentIndex = index
            this.$emit('detailnavbaritem',index)
          },
          detailnavbarback(){
            this.$router.go(-1)
          }
        },
      activated() {
          this.$bus.$emit('Rdetail')
      }
    }
</script>

<style scoped>
  .detailnav{
    display: flex;
    font-size: 15px;
  }
  .detailnavitem{
    flex: 1;
    margin-left: 6px;
    position: relative;
  }
  .active{
    color: #FF4466;
    font-size: 16px;
  }
  .detailnavbarimg{
    margin-top: 10px;
    width: 22px;
  }

  .underline{
    height: 3px;
    width: 46px;
    background-color: white;
    position: absolute;
    top: 34px;
    left: 10px;
  }
  .divactive{
    background-color: #FF4466;
  }
</style>
