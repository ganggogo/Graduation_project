import {request} from "./request";


export function getXingchengDetail(id) {
  return request({
    url:'/xingchengdetail/'+id,
  })
}