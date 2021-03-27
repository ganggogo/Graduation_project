<template>
    <div class="chaoliuguan">
      <scroll class="contentmain" ref="scroll">
        <GoodList :goods="showgoods"></GoodList>
        <nomore></nomore>
      </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/scroll";
    import GoodList from "./goods/GoodList";
    import Nomore from "../../../components/common/nomore/nomore";
    import {showgoods} from "./showgoods";

    import {getnengliangyinliao} from "network/fenlei.js"

    export default {
        name: "chaoliuguan",
        data() {
            return {
              showgoods:[]
            }
        },
        components: {Nomore, GoodList, Scroll},
      created() {
          // this.showgoods = showgoods()

        getnengliangyinliao().then(res=>{
          this.showgoods = res
        })
      },
      methods:{
          imgload(){
            this.$refs.scroll.refresh()
          }
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
    border-radius: 16px;
    margin-top: 5px;
    padding-top: 5px;
    color: black;
  }
</style>
