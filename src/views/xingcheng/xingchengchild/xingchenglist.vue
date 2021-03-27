<template>
  <div class='xingchenglist'>
    <xingchengitem
        v-for="(item,index) in xingchengdata" :key="item.id"
        :xingchengitemdata="item"
    ></xingchengitem>
  </div>
</template>

<script>
  import xingchengitem from "./xingchengitem";
  export default {
    name: 'xingchenglist',
    data() {
      return {}
    },
    props:{
      xingchengdata:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      xingchengitem
    }
  }
</script>

<style scoped>

</style>