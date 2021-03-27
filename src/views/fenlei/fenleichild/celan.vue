<template>
    <div class="celan">
      <ul>
        <li v-for=
              "(celanitem,index) in celandata"
            :key="index"
            @click="celanitemclick(index)"
            :class="{celanitemactive:index === currentcelanitem}"
            class="celanitem"
        >

          <!--这是a标签嘛-->
          <router-link :to="celanitem.path">{{celanitem.name}}</router-link>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: 'celan',
        data()
        {
          return {
            currentcelanitem:0,
          }
        },
        props:{
            celandata:{
              type:Array,
              default(){
                return ''
              }
            }
        },
      beforeMount() {

      },
      mounted() {

      },
      created() {



        },
        methods:{
          celanitemclick(index){
            this.currentcelanitem = index
            localStorage.setItem('fenleicelan',this.currentcelanitem)
          },
          callback(name) {
            console.log(`点击了name是${name}的面板,callback`);
          }
        },


      //记录下离开分类页面时，点击的哪个celanitem
      deactivated() {
      },
      activated() {
        if(localStorage.getItem('fenleicelan')){
          // console.log(111)
          console.log(localStorage.getItem('fenleicelan'));
          this.currentcelanitem = parseInt(localStorage.getItem('fenleicelan'))
        }else {
          this.currentcelanitem = 0
        }
      }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
    padding: 12px 16px;
  }
  .celan{

    width: 100%;
    height: 100%;
    background-color: rgb(247,247,247);
    text-align: center;
    color: rgb(65,65,65);
    font-size: 15px;
  }
  .celanitemactive{
    background-color: white;
    font-size: 17px;
    border-left: 2px solid #FF4466;
  }
  .celanitemactive a{
    color: #FF4466;
  }
  a{
    text-decoration: none;
    color: rgb(65,65,65);
  }
</style>
