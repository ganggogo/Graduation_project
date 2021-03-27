import {request} from "./request";


export function getchangyongzhuangbei() {
  return request({
    url:'/changyongzhuangbei',
  })
}
export function getchangyongzhuangbeitopswiper() {
  return request({
    url:'/changyongzhuangbeitopswiper',
  })
}

export function getnengliangyinliao() {
  return request({
    url:'/nengliangyinliao',
  })
}