import request from '@/utils/request'

const userApi = {
  info: '/user/info',
  menu: '/user/menu',
  userList: '/users',
  create: '/user/create',
  delete: '/user/delete',
  resetPassword: '/user/resetPassword',
  changePassword: '/user/changePassword'
}

export function getInfo () {
  return request({
    url: userApi.info,
    method: 'get'
  })
}

export function getCurrentUserNav () {
  return request({
    url: userApi.menu,
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
    url: userApi.create,
    method: 'post',
    data: data
  })
}

export function deleteUser(data) {
  return request({
    url: userApi.delete,
    method: 'post',
    data: data
  })
}

export function findUserList(data) {
  return request({
    url: userApi.userList,
    method: 'post',
    data: data
  })
}
