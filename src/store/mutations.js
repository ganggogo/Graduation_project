
import {
  ADD_COUNTER,ADD_TO_CART
}from './mutations-type'

export default{
  [ADD_COUNTER](state,payload){
    payload.count ++
    localStorage.setItem('cart',JSON.stringify(state.cartList))
  },
  [ADD_TO_CART](state,payload){
    payload.count = 1
    payload.isChecked = true
    state.cartList.push(payload)

    localStorage.setItem('cart',JSON.stringify(state.cartList))//在更新cartList之后，把cart数组保存到本地的localStorage中（大约5M的储存空间，为了解决浏览器session小的问题）
  },

  addxingchenglist(state,payload){
    state.xingchengList.push(payload)
    localStorage.setItem('xingcheng',JSON.stringify(state.xingchengList))
  },

  deletexingcheng(state,payload){
    const index = state.xingchengList.findIndex(item=>item.id===payload.iid)
    state.xingchengList.splice(index,1)
    localStorage.setItem('xingcheng',JSON.stringify(state.xingchengList))
  },
  addnum(state,payload){

    var res = state.cartList.filter(item=>payload.id === item.id)
    res[0].count ++
    localStorage.setItem('cart',JSON.stringify(state.cartList))
  },
  denum(state,payload){
    var res = state.cartList.filter(item=>payload.id === item.id)
    res[0].count --
    localStorage.setItem('cart',JSON.stringify(state.cartList))
  },
  deletegoodsorder(state,payload){
    const index = state.cartList.findIndex(item=>item.id===payload.iid)
    state.cartList.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(state.cartList))
  }
}