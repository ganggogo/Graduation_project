<template>
  <div class='detailxuanzepici'>
    <div class="box">
      <img src="~assets/imgs/detail/pici.svg" alt="">
      <span class="textspan">选择批次:</span>
      <span class="show-value">{{this.date3}}</span>
      <div class="xuanze" @click="xuanzeriqi">
        <span class="xuanzeriqi" style="color: #FF4466">选择</span>
        <img src="~assets/imgs/detail/xuanzeriqi.svg" alt="">

      </div>

    </div>
    <button @click="xuanzeriqi">安陆</button>
    <nut-calendar
        :is-visible.sync="isVisible3"
        :default-value="date3"
        type="range"
        :start-date="null"
        :end-date="null"
        :animation="`nutSlideUp`"
        @close="switchPickerClose('isVisible3')"
        @choose="setChooseValue3"
    >
    </nut-calendar>
  </div>
</template>

<script>
  export default {
    name: 'detailxuanzepici',
    data() {
      return {
        //选择日期插件
        isVisible: false,
        isVisible1: false,
        isVisible2: false,
        isVisible3: false,
        date: null,
        dateWeek: null,
        date1: ['2018-12-22', '2019-01-08'],
        // date2: Utils.getDay(30), // 当前日期之后的30天
        date3: null
      }
    },
    methods:{
      //选择日期按钮
      xuanzeriqi(){
        this.isVisible3 = true
      },

      switchPickerClose(param){
        console.log('close:' + param)
      },
      switchPicker(param) {
        this[`${param}`] = true;
      },
      setChooseValue(param) {
        this.date = param[3];
        this.dateWeek = param[4];
      },
      setChooseValue1(param) {
        this.date1 = [...[param[0][3],param[1][3]]];
      },
      setChooseValue2(param) {
        this.date2 = param[3];
      },
      setChooseValue3(param) {
        this.date3 = [...[param[0][3],param[1][3]]];
      }
    }
  }
</script>

<style scoped>
.detailxuanzepici{
  padding: 16px 10px;
  width: 100%;
  /*height: 40px;*/
}
.detailxuanzepici span{
  display: inline-block;
}
.detailxuanzepici img{
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
    margin-left: 50px;
  }

  .nut-calendar{
    margin-top: 140px;
  }
</style>