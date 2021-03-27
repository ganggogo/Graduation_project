<template>
  <div class='detailtopimg'>
    <img :src="detailtopimg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'detailtopimg',
    data() {
      return {}
    },
    props:{
      detailtopimg:{
        type:String,
        default(){
          return ""
        }
      }
    }
  }
</script>

<style scoped>
.detailtopimg img{
  height: 300px;
  width: 100%;
}
</style>