import request from '@/utils/request'

export function changePassword(parameter) {
  return request({
    url: '/user/changePassword',
    method: 'post',
    data: parameter
  })
}
