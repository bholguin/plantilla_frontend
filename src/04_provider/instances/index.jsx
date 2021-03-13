import axios from "axios";


export const axiosFlaskApi = (token) => {
    return axios.create({
        baseURL: process.env.REACT_APP_FLASK_API,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
