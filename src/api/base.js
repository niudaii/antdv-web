import request from '@/utils/request'

const baseApi = {
  Login: '/base/login',
  Logout: '/base/logout',
  Captcha: '/base/captcha'
}

export function login (data) {
  return request({
    url: baseApi.Login,
    method: 'post',
    data: data
  })
}

export function logout () {
  return request({
    url: baseApi.Logout,
    method: 'get'
  })
}

export function captcha () {
  return request({
    url: baseApi.Captcha,
    method: 'get'
  })
}
