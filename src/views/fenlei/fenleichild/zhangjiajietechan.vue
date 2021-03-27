<template>
  <div class='zhangjiajietechan'>
    <scroll
        class="content"
        ref="scroll"
        :probe-type="3"
        :pull-up-load="true"
    >
      <GoodList :goods="showgoods"></GoodList>
      <nomore></nomore>
    </scroll>
  </div>
</template>

<script>
  import GoodList from "./goods/GoodList";
  import Scroll from "../../../components/common/scroll/scroll";
  import Nomore from "../../../components/common/nomore/nomore";
  import {showgoods} from "./showgoods";
  export default {
    name: 'zhangjiajietechan',
    components: {Nomore, Scroll, GoodList},
    data() {
      return {
        showgoods:showgoods()
      }
    },
  }
</script>

<style scoped>

.content{
  width: 75%;
  position: absolute;
  left: 25%;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background-color: white;
  margin-top: 5px;
  padding-top: 5px;
}
</style>