import axios from "axios"
const instance = axios.create({
    // baseURL: "https://wa2-react-default-rtdb.asia-southeast1.firebasedatabase.app/"
    // baseURL: "http://123.56.107.143:4000"
    // baseURL: 'http://localhost:4000'
    baseURL: 'http://118.31.55.244:4000'
})

export default instance
