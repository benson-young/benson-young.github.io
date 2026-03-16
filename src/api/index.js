import axios from 'axios'

// 创建Axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 模拟添加token
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token') || ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 模拟成功状态码
    if (res.code !== 200) {
      ElMessage.error(res.msg || '请求失败')
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    ElMessage.error(error.message || '服务器错误')
    return Promise.reject(error)
  }
)

export default service