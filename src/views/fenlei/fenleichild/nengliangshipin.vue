<template>
    <div class="xinpinguan">
      <scroll class="contentmain">
        <GoodList :goods="showgoods"></GoodList>
        <nomore></nomore>
      </scroll>
    </div>
</template>

<script>
  import scroll from "../../../components/common/scroll/scroll";
  import GoodList from "./goods/GoodList";
  import Nomore from "../../../components/common/nomore/nomore";

  import {showgoods} from "./showgoods";

  export default {
        name: "xinpinguan",
        data() {
            return {
              showgoods:showgoods
            }
        },
    created() {
          this.showgoods = showgoods()
    },
    components: {
          Nomore,
          GoodList,
          scroll
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
