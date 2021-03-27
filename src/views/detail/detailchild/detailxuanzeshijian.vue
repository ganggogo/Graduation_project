<template>
  <div class='xuanzeshijian'>
    <div class="box">
      <img src="~assets/imgs/detail/pici.svg" alt="">
      <span class="textspan">选择批次:</span>
      <span class="show-value" @click="xuanzeshijian" v-if="date!=''">{{date}}</span>
      <span class="show-value" @click="xuanzeshijian" v-else>请选择批次</span>
      <div class="xuanze" @click=xuanzeshijian>
        <span class="xuanzeriqi" style="color: #FF4466">选择</span>
        <img src="~assets/imgs/detail/xuanzeriqi.svg" alt="">
      </div>
    </div>



  </div>

</template>

<script>
  export default {
    name: 'xuanzeshijian',
    data() {
      return {

      }
    },
    props:{
      date:{
        type:String,
        default(){
          return ''
        }
      }
    },
    methods: {
      //选择日期按钮
      xuanzeshijian(){
        this.$emit('changeshow','true')
      },

      //选择日期插件
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onConfirm(date) {
        const [start, end] = date;
        this.show = false;
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      },
    }
  }
</script>

<style scoped>

.xuanzeshijian{
  padding: 16px 10px;
  width: 100%;
  height: 22px;
}
.xuanzeshijian span{
  display: inline-block;
}
.xuanzeshijian img{
  width: 20px;
  vertical-align: -4px;
  margin-right: 5px;
}
.textspan{
  letter-spacing: 5px;
  color: #909090;
}

.box{
  display: flex;
}
.xuanze{
  margin-left: 106px;
}
.show-value{
  font-size: 20px;
  margin-left: 30px;
  color: #FF2D66;
  margin-bottom: 2px;
}

.vantcalendar{
  height: 600px;
  position: fixed;
  bottom: 40px;
  left: 0;
}
</style>