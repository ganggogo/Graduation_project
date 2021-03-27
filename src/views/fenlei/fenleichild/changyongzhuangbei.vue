<template>
    <div class="remaibangdan">
      <scroll class="contentmain" ref="scroll">
        <fenleiswiper :swiperimgs="swiperimgs"></fenleiswiper>
        <GoodList :goods="showgoods"></GoodList>
        <nomore></nomore>
      </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/scroll";
    import Fenleiswiper from "./fenleiswiper";
    import GoodList from "./goods/GoodList";
    import Nomore from "../../../components/common/nomore/nomore";
    import {getchangyongzhuangbei,getchangyongzhuangbeitopswiper} from 'network/fenlei.js'
    export default {
        name: "remaibangdan",
        data() {
            return {
              swiperimgs: [],
              showgoods:[]

            }
        },
        components: {
          Nomore,
          GoodList,
          Fenleiswiper,
          Scroll

        },
      created() {
        this.getchangyongzhuangbei()
        getchangyongzhuangbeitopswiper().then(res=>{
          this.swiperimgs = res
        })
      },
      methods:{
        getchangyongzhuangbei(){
          getchangyongzhuangbei().then(res=>{
            this.showgoods = res
          })
        }
      },
      activated() {
          this.$refs.scroll.scrollTo(0,scrollY,0)
          this.$refs.scroll.refresh()
        },
        deactivated() {
          scrollY = this.$refs.scroll.scroll.y
          // console.log(scrollY)
        }
    }
</script>

<style scoped>
  .contentmain{
    width: 75%;
    position: absolute;
    left: 25%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background-color: white;
    /*border-radius: 16px;*/
    margin-top: 5px;
    padding-top: 5px;
  }
  .rexiaobangdancontent{
    margin-top: 5px;
    background-color: white;
  }
</style>
