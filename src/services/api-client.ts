import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'e776fc7c7f6244ff9c754dc574145258'
    }
})