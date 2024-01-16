import fetch from 'auth/FetchMasterInterceptor'

const masterService = {}

masterService.getDepartment = function (data) {
  return fetch({
    url: '/department/list',
    method: 'post',
    data:data
  })
}
masterService.addDepartment = function (data) {
  return fetch({
    url: '/department/create',
    method: 'post',
    data:data
  })
}
masterService.editDepartment = function (data) {
  return fetch({
    url: '/department/update',
    method: 'post',
    data:data
  })
}
masterService.deleteDepartment = function (data) {
  return fetch({
    url: '/department/delete',
    method: 'post',
    data:data
  })
}
masterService.getDesignation = function (data) {
  return fetch({
    url: '/designation/list',
    method: 'post',
    data:data
  })
}
masterService.addDesignation = function (data) {
  return fetch({
    url: '/designation/create',
    method: 'post',
    data:data
  })
}
masterService.editDesignation = function (data) {
  return fetch({
    url: '/designation/edit',
    method: 'post',
    data:data
  })
}
masterService.deleteDesignation = function (data) {
  return fetch({
    url: '/designation/delete',
    method: 'post',
    data:data
  })
}
masterService.getFrequency = function (data) {
  return fetch({
    url: '/frequency/list',
    method: 'post',
    data:data
  })
}
masterService.addFrequency = function (data) {
  return fetch({
    url: '/frequency/create',
    method: 'post',
    data:data
  })
}
masterService.editFrequency = function (data) {
  return fetch({
    url: '/frequency/edit',
    method: 'post',
    data:data
  })
}
masterService.deleteFrequency = function (data) {
  return fetch({
    url: '/frequency/delete',
    method: 'post',
    data:data
  })
}    
    
export default masterService