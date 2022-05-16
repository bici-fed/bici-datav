import axios from 'axios'
const timeout=2000000;
const maxContentLength=200000000;
const withCredentials = false
export function clientParam(apiURL:string) {
  return axios.create({baseURL: `${apiURL}/api`, timeout, maxContentLength,withCredentials})
}

export function apiClientParam(apiURL:string) {
  return axios.create({baseURL: `${apiURL}/api/manager`, timeout, maxContentLength,withCredentials})
}

// 查询数据点列表
export function fetchSearchDataPointManageList(params:any) {
  return apiClientParam(window["__CONKPIT_API_URL"]).post('/datapoint/list', params,{
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      token: window["__CONKPIT_TOKEN"],
      'Content-Type': 'application/json',
    }
  })
}
// 查询视频列表
export function fetchVedioList(params:any) {
  return clientParam('http://zysco.test.bicisims.com/').post('/surveillance/channel/listStream', params,{
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      token: '6p2z9ZDNfMNk0XsJ6ki2lq',
      'Content-Type': 'application/json',
    }
  })
}
// 查询反应堆列表
export function fetchSearchReactStackList (params:any) {
  return clientParam(window["__CONKPIT_API_URL"]).post('/applications/service/remote/reactor/list', params,{
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      token: window['token'],
      'Content-Type': 'application/json',
    }
  })
}
// 获取复杂感知点列表
export function fetchPerceptualPointList(params:any) {
  return clientParam(window["__CONKPIT_API_URL"]).post('/applications/service/remote/complexData/list', params,{
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      token: window["__CONKPIT_TOKEN"],
      'Content-Type': 'application/json',
    }
  })
}
