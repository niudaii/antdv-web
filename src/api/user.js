import request from '@/utils/request'

const userApi = {
  users: '/users',
  userInfo: '/user/info',
  userMenu: '/user/menu',
  createUser: '/user/create',
  deleteUser: '/user/delete',
  resetPassword: '/user/resetPassword',
  changePassword: '/user/changePassword'
}

export function getInfo () {
  return request({
    url: userApi.userInfo,
    method: 'get'
  })
}

export function getCurrentUserNav () {
  return request({
    url: userApi.userMenu,
    method: 'get'
  })
}

export function changePassword(data) {
  return request({
    url: userApi.changePassword,
    method: 'post',
    data: data
  })
}

export function resetPassword(data) {
  return request({
    url: userApi.resetPassword,
    method: 'post',
    data: data
  })
}

export function createUser(data) {
  return request({
    url: userApi.createUser,
    method: 'post',
    data: data
  })
}

export function deleteUser(data) {
  return request({
    url: userApi.deleteUser,
    method: 'post',
    data: data
  })
}

export function findUserList(data) {
  return request({
    url: userApi.users,
    method: 'post',
    data: data
  })
}
