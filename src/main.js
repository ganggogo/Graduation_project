import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局使用usermoduleaxios
import axios from 'network/users/axios'
Vue.prototype.$axios = axios

//全局使用xingchengorder module axios
import axiosxingchengorder from 'network/xingchengorder/axios'
Vue.prototype.$axiosxingchengorder = axiosxingchengorder

//全局使用goodsorder module axios
import axiosgoodsorder  from 'network/goodsorder/axios'
Vue.prototype.$axiosgoodsorder = axiosgoodsorder


//清除localstorage缓存
// localStorage.clear()
//事件总线
Vue.prototype.$bus = new Vue()

//使用NutUI库  (日历组件不好用  鸡肋)
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

//使用MintUI库 (垃圾不用了)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//使用VantUI库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Toast } from 'vant';
Vue.use(Toast);

//使用vue查看大图组件
import PhotoPreview from 'vue-photo-preview'
import "vue-photo-preview/dist/skin.css"
Vue.use(PhotoPreview)

//使用地图
import AMap from 'vue-amap'
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'aef0e7460f0b7dcd0961978a55649ada',
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    //输入提示插件
    "AMap.PlaceSearch",
    //POI搜索插件
    "AMap.Scale",
    //右下角缩略图插件 比例尺
    "AMap.OverView",
    //地图鹰眼插件
    "AMap.ToolBar",
    //地图工具条
    "AMap.MapType",
    //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor",
    //编辑 折线多，边形
    "AMap.CircleEditor",
    //圆形编辑器插件
    "AMap.Geolocation"
    //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
});

//使用lazy-load
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:require('assets/imgs/common/placeholder.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
