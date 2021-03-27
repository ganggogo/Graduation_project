<template>
    <div class="cartgooditem">
      <check-duigou class="duigou" :is-checked="goods.isChecked" @click.native="duigouclick"></check-duigou>
      <div class="left-img">
        <img :src="goods.img" alt="" @load="imgLoad">
      </div>
      <div class="right">
        <span class="deleteorder" @click="deleteorder">删除</span>
        <p class="right-top"><b>{{goods.title}}</b></p>
        <p class="right-middle">{{goods.desc}}</p>
        <div class="right-bottom">
          <span class="price">￥{{goods.price}}</span>
          <span class="spancount" v-if="showbox" @click="spancountclick">×{{goods.count}}</span>
          <div v-else class="divcout ">
            <span @click="decclick" class="decfunspan"><b>-</b></span>
            <span class="numspan">{{goods.count}}</span>
            <span @click="incclick" class="incfunspan"><b>+</b></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import CheckDuigou from "components/common/checkedduigou/CheckDuigou";
    import { Dialog } from 'vant';
    export default {
        name: "GoodList",
        data() {
            return {
              // isChecked:this.$store.state.cartList.isChecked
              showbox:true
            }
        },
        props:{
          goods:{
            type:Object,
            default(){
              return{}
            }
          }
        },
        created() {
        },
        components: {
          CheckDuigou

        },
        methods:{
          duigouclick(){
            this.goods.isChecked = !this.goods.isChecked
          },
          spancountclick(){
            this.showbox = !this.showbox
          },
          decclick(){
            if ( this.goods.count > 1 ){
              const payload = {}
              payload.id = this.goods.id
              this.$store.dispatch('denum',payload)
            }
          },
          incclick(){
            const payload = {}
            payload.id = this.goods.id
            this.$store.dispatch('addnum',payload)
          },

          imgLoad(){
            this.$bus.$emit('gouwucheLoad')
          },

          //删除item
          deleteorder(){
            Dialog.confirm({
              title: '寻游提示',
              message: '您确定删除该商品吗？',
            }).then(() => {
                  //删除数据库数据
                  const data = {}
                  data.iid = this.goods.id
                  this.$axiosgoodsorder.post('/delete',data).then(res=>{
                    console.log(res.data)
                  })
                  //删除state里面的信息
                  this.$store.dispatch('deletegoodsorder',data)
              }).catch(()=>{

            })
          }
        }
    }
</script>

<style scoped>
  .cartgooditem{
    display: flex;
    width: 100%;
    height: 157px;
    padding: 6px 6px 0px 6px;
    border-bottom: solid 2px rgb(243,233,233);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .1);
    background-color: #F9F9F9;

  }
  .left-img{
    padding: 5px;
    margin-right: 14px;
  }
  .left-img img{
    width: 90px;
    height: 130px;
    border-radius: 10px;
  }
  .right{
    width: calc(100% - 144px);
    margin-right: 5px;
    position: relative;
  }
  .deleteorder{
    position: absolute;
    top: 128px;
    left: 186px;
    color: rgb(253,101,29);
  }
  .right p{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size:16px;
  }
  .right-top{
    font-size: 21px;
    margin-bottom: 10px;
    margin-top: 18px;
    width: 90%;
  }
  .right-middle{
    font-size: 15px;
    color: rgb(65,64,64);
  }
  .price{
    font-size: 20px;
    color: rgb(253,101,29);
    display: inline-block;
    width: 84px;
  }
  .right-bottom{
    margin-top: 10px;
    display: flex;
  }
  .spancount{
    margin-left: 62px;
    font-size: 18px;
    border: 0.5px solid rgb(181,180,180);
    padding: 4px 10px;
    border-radius: 20%;
  }
  .duigou{
    margin-top: 58px;
  }
  .divcout{
    margin-top: 0px;
    margin-left: 18px;
    border: 0.5px solid rgb(181,180,180);
    font-size: 18px;
    border-radius: 6px;
  }
  .decfunspan{
    padding: 4px 8px;
    border-right: 0.5px solid rgb(181,180,180);
  }
  .incfunspan{
    padding: 4px 8px;
    border-left: 0.5px solid rgb(181,180,180);
  }
  .numspan{
    padding: 3px 0px;
    text-align: center;
    display: inline-block;
    width: 75px;
  }

</style>
