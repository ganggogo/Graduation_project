
import {
  ADD_COUNTER,ADD_TO_CART
}from './mutations-type'

//action 里面的方法参数第一个是 context(上下文)，第二个是payload，第三个是root啥来着
export default {
  addcart(context,payload){
    return new Promise((resolve,reject)=>{
      //1.查找之前的数组中是否有该商品
      let oldproduct = context.state.cartList.find(item => item.id === payload.id )

      //2.判断oldproduct
      if(oldproduct){
        context.commit(ADD_COUNTER,oldproduct)
        resolve ('当前商品数量加1')
      }else {
        // payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve('成功添加商品')
      }
    })
  },
  addtoxingcheng(context,payload){
    return new Promise((resolve,reject)=>{
      //1.查找之前的数组中是否有该行程
      let oldproduct = context.state.xingchengList.find(item => item.id === payload.id )

      if(oldproduct){
        resolve ('请勿重复报名!')
      }else {
        context.commit('addxingchenglist',payload)
        resolve('恭喜,报名成功')
      }
    })
  },
  deletexingcheng(context,payload){
    return new Promise((resolve, reject) => {
      context.commit('deletexingcheng',payload)
    })
  },
  addnum(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit('addnum',payload)
    })
  },
  denum(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit('denum',payload)
    })
  },
  deletegoodsorder(context,payload){
    return new Promise((resolve,reject)=>{
      context.commit('deletegoodsorder',payload)
    })
  }
}