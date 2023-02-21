import request from '@/utils/request'

const systemApi = {
  operationList: '/operation/list'
}

export function findOperationList(data) {
  return request({
    url: systemApi.operationList,
    method: 'post',
    data: data
  })
}
