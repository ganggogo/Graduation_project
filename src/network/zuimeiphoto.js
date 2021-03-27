import {request} from "./request"

export function getswiperData() {
  return request({
    url:"/zuimeiphotoswiper"
  })
}

export function getboxData() {
  return request({
    url:"/zuimeiphotobox"
  })
}