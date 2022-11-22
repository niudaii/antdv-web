import request from '@/utils/request'

const systemApi = {
  operations: '/operations'
}

export function findOperationList(data) {
  return request({
    url: systemApi.operations,
    method: 'post',
    data: data
  })
}
