import axios from "axios"
// 后端api服务器
const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

export default instance
