import axios from "axios";


export const axiosFlaskApi = axios.create({
    baseURL: process.env.REACT_APP_FLASK_API,
    headers: {
        'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
    }
})

export const axiosFlaskApiLogin = axios.create({
    baseURL: process.env.REACT_APP_FLASK_API
})

