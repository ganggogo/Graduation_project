import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

//每一次进入网站，肯定会调用main.js，在刚刚调用时，先从本地存储中，把购物车的数据取出来，放到store中
const cart = JSON.parse(localStorage.getItem('cart')  || '[]')
const xingcheng = JSON.parse(localStorage.getItem('xingcheng')  || '[]')


//1.安装插件
Vue.use(Vuex)

//创建store对象
const state = {
  cartList:cart,
  xingchengList:xingcheng
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//3.挂载Vue实例上
export default store
