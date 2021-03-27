<template>
  <div class='xingchengitem'>
    <div class="top">
      <img src="~assets/imgs/xingcheng/xingcheng.svg" alt="">
      <span>寻游户外出行</span>
      <span class="delete" @click="deleteorder">删除</span>
    </div>
    <div class="bottomm">
      <div class="imgbox">
        <img :src="xingchengitemdata.img" alt="" @load="imgLoad">
      </div>
      <div class="box">
        <p class="title">{{xingchengitemdata.title}}</p>
        <div class="info">
           <div style="display: flex;position: relative">
              <span class="price">
            价格:￥
            </span>
             <span class="pricee"><b>{{xingchengitemdata.price}}</b></span>
           </div>
          <div style="display: flex;position: relative" class="date">
              <span class="price">
            日期:
            </span>
            <span class="pricee" v-if="xingchengitemdata.date"><b>{{xingchengitemdata.date}}</b></span>
            <span class="priceee" v-else><b>未选择出行批次</b></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant';
  export default {
    name: 'xingchengitem',
    data() {
      return {
      }
    },
    props:{
      xingchengitemdata:{
        type:Object,
        default(){
          return ''
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('xingchengLoad')
      },


      deleteorder(){
        // console.log(this.xingchengitemdata.id)
        Dialog.confirm({
          title: '寻游提示',
          message: '您确定要删除该订单吗？',
        }).then(() => {
          //1.删除数据库的对应信息
          const data = {}
          data.iid = this.xingchengitemdata.id
          this.$axiosxingchengorder.post('/delete',data)
          //2.删除state对应的数据
          this.$store.dispatch('deletexingcheng',data)
        }).catch(()=>{

        })


        // //发出事件让行程页面刷新(咩必要好像........)
        // this.$bus.$emit('refreshpage')
      }
    },

  }
</script>

<style scoped>
.xingchengitem{

  margin: 5px 10px;
  border-bottom: 1px solid #AEAEAE;
  background-color: #F9F9F9;
  padding: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .1);
}
.top{
  padding: 4px 0px;
  border-bottom: 1px #707070 dashed;
  position: relative;
}
.top img{
  width: 36px;
  vertical-align: -8px;
}
.bottomm{
  display: flex;
  margin-top: 5px;
}
  .imgbox img{
    height: 180px;
    width: 160px;
    border-radius: 10px;
  }
  .title{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size:18px;
    margin-top: 40px;
    margin-left: 10px;
  }
  .info{
    margin-left: 10px;
    margin-top: 10px;
  }
  .info span{
    display: block;
  }
  .pricee{
    font-size: 26px;
    color: #FF4466;
    position: absolute;
    top:-5px;
    left: 52px;
  }
  .priceee{
    font-size: 20px;
    color: #FF4466;
    position: absolute;
    top:-2px;
    left: 52px;
  }
  .date{
    margin-top: 20px;
  }

  .delete{
    position: absolute;
    left: 334px;
    top: 15px;
    color: #FF4466;
  }
</style>