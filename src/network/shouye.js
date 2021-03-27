import {request} from "./request"

export function getShouyeSwiperData() {
  return request({
    url:"/swiperimgs"
  })
}
export function getShouyeYiLiangSanData() {
  return request({
    url:"/yiliangsan"
  })
}
export function getShouyeAllYiLiangSanData() {
  return request({
    url:"/allyiliangsan"
  })
}
export function getShouyejingdianchangxianData() {
  return request({
    url:"/jingdianchangxian"
  })
}
export function getShouyealljingdianchangxianData() {
  return request({
    url:"/alljingdianchangxian"
  })
}
export function getShouyeshangchunhuodongData() {
  return request({
    url:"/shangchunhuodong"
  })
}
export function getallShouyeshangchunhuodongData() {
  return request({
    url:"/allshangchunhuodong"
  })
}
export function getShouyezuimeizhaopianData() {
  return request({
    url:"/zuimeizhaopian"
  })
}
export function getcainixihuanData() {
  return request({
    url:"/cainixihuan"
  })
}
export function getallcainixihuanData() {
  return request({
    url:"/allcainixihuan"
  })
}