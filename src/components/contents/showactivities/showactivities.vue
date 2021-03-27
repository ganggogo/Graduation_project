<template>
  <div id="showactivities">
    <showactivitiesitem
        :activityitem = item
        v-for="(item,index) in activity "
        :key = item.id
    >
    </showactivitiesitem>
  </div>
</template>

<script>
  import Showactivitiesitem from "./showactivitiesitem";
  export default {
    name: 'showactivities',
    components: {Showactivitiesitem},
    props:{
      activity:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #showactivities{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
</style>