<template>
  <div>
    <nut-popup
        class='zuocelan'
        position="left"
        v-model="show1"
        :style="{ width, height }"
    >
      <div class="topinfo">个人中心</div>
      <div class="box">
        <div class="touxiangbox" v-if="!isLogined" @click="toLogin">
          <img src="~assets/imgs/wode/gerentouxiang.svg" alt="">
        </div>
        <div class="touxiangbox" v-else>
          <img src="~assets/imgs/wode/logined.png" alt="">
        </div>
        <div class="state" v-if="!isLogined" @click="toLogin">未登录</div>
        <div class="state" v-else>寻游用户{{zhanghao}}</div>
      </div>

      <div class="rowinfo diyige" @click="xiaoxi" style="position: relative">
        <div class="icon"><img src="~assets/imgs/wode/xinfeng1.svg" alt=""></div>
        <div class="title">我的消息</div>
        <div class="icon" style="position: absolute;top: 15px;left: 286px"><img src="~assets/imgs/wode/xiangyou1.svg" alt=""></div>

      </div>
      <div class="rowinfo" style="position: relative">
        <div class="icon"><img src="~assets/imgs/wode/jifenshangcheng1.svg" alt=""></div>
        <div class="title">积分商城</div>
        <div class="icon" style="position: absolute;top: 15px;left: 286px"><img src="~assets/imgs/wode/xiangyou1.svg" alt=""></div>
      </div>
      <div class="rowinfo" style="position: relative">
        <div class="icon"><img src="~assets/imgs/wode/vip1.svg" alt=""></div>
        <div class="title">会员卡</div>
        <div class="icon" style="position: absolute;top: 15px;left: 286px"><img src="~assets/imgs/wode/xiangyou1.svg" alt=""></div>

      </div>
      <div class="rowinfo" style="position: relative">
        <div class="icon"><img src="~assets/imgs/wode/gouwuche1.svg" alt=""></div>
        <div class="title">我的购物车</div>
        <div class="icon" style="position: absolute;top: 15px;left: 286px"><img src="~assets/imgs/wode/xiangyou1.svg" alt=""></div>

      </div>
      <div class="rowinfo" style="position: relative">
        <div class="icon"><img src="~assets/imgs/wode/shangcheng1.svg" alt=""></div>
        <div class="title">下载购物app</div>
        <div class="icon" style="position: absolute;top: 15px;left: 286px"><img src="~assets/imgs/wode/xiangyou1.svg" alt=""></div>

      </div>
    </nut-popup>
  </div>
</template>

<script>
  import navbar from "../../../components/common/navbar/navbar";
  import {Toast} from "vant";
  export default {
    name: 'shouyezuocelan',
    data() {
      return {
        //左侧栏数据
        show1:false,
        width: '80%',
        height: '100%',

        //外引入组件数据
        val: "手机/邮箱",


        //localstorage
        isLogined:false,
        zhanghao:''
      }
    },
    components:{
      navbar
    },
    created() {
      this.$bus.$on('shownav1',()=>{
        this.show1 = true
      })

      this.show1=false
    },
    methods:{
      xiaoxi(){
        Toast.fail('暂无消息!')
      },
      toLogin(){
        this.$router.push('/login')
      }
    },
    activated() {
      if(localStorage.getItem('guanliyuan')){
        console.log('已登录...')
        this.zhanghao = localStorage.getItem('guanliyuan').split('.')[1]
        this.isLogined = true

        console.log(this.zhanghao)
      }else {
        console.log('未登录...')
        this.isLogined = false
      }
    },
    deactivated() {
      this.show1=false
    }
  }
</script>

<style scoped>
.zuocelan{
  background-image: radial-gradient( circle 627px at 52.1% 62.7%,  rgba(255,68,102,1) 64.1%, rgba(187,187,187,1) 100.2% );
  opacity:0.9;
  color: white;
}
.topinfo{
  font-size: 30px;
  color: white;
  text-align: center;
  border-bottom: 1px solid #F3B1B1;
  padding: 8px 0;
}
  .touxiangbox{
    width: 100%;
    height: 100px;
    margin-top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .touxiangbox img{
    height: 100%;
    border: 1px solid white;
    border-radius: 50%;
  }
  .state{
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
  }


.myinfo{
  width: 100%;
  height: 16%;
  display: flex;
  border-bottom: 1px solid rgb(248,248,248);
  justify-content: center;
  align-items: center;
  border-bottom: 14px solid rgb(248,248,248);
}
.myyue{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(235,235,235);
}
.myyouhui{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(235,235,235);
}
.myjifen{
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.num{
  font-size: 20px;
  color: rgb(253,93,81);
}
.top{
  text-align: center;
}
.rowinfo{
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid rgb(235,235,235);
}
.icon{
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon img{
  width: 50px;
  height: 20px;
}
.title{
  height: 100%;
  line-height: 50px;
}
.rowinfo:nth-last-child(3){
  border-bottom: 1px solid rgb(235,235,235);
}

  .diyige{
    margin-top: 30px;
  }
</style>