import request from '@/utils/request'

export function findOperationList(data) {
  return request({
    url: '/operations',
    method: 'post',
    data: data
  })
}
