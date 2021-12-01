import axios from "axios"
const instance = axios.create({
    baseURL: "https://wa2-react-default-rtdb.asia-southeast1.firebasedatabase.app/"
})

export default instance