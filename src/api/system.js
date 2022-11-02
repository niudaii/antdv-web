import request from '@/utils/request'

export function findOperationList(parameter) {
  return request({
    url: '/operation/find/list',
    method: 'post',
    data: parameter
  })
}

export function findUserList(parameter) {
  return request({
    url: '/user/find/list',
    method: 'post',
    data: parameter
  })
}

export function resetPassword(parameter) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data: parameter
  })
}

export function addUser(parameter) {
  return request({
    url: '/user/add',
    method: 'post',
    data: parameter
  })
}

export function deleteUser(parameter) {
  return request({
    url: '/user/delete',
    method: 'post',
    data: parameter
  })
}
