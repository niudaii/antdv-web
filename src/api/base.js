import request from '@/utils/request'

const baseApi = {
  login: '/base/login',
  logout: '/base/logout',
  captcha: '/base/captcha'
}

export function login (data) {
  return request({
    url: baseApi.login,
    method: 'post',
    data: data
  })
}

export function logout () {
  return request({
    url: baseApi.logout,
    method: 'get'
  })
}

export function captcha () {
  return request({
    url: baseApi.captcha,
    method: 'get'
  })
}
