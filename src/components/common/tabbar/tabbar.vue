<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
     #tab-bar{
        display: flex;
        width: 100%;
        /* height:100px; */
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
        box-shadow: 0 0px 0.5px rgba(100, 100, 100, 0.8);
  }
 
</style>