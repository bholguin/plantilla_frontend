
import {
    axiosFlaskApi,
} from '../instances'

export const postLogin = (data) => {
    return axiosFlaskApi({
        method: 'POST',
        url: '/login',
        data
    })
}

export const getLogout = (token) => {
    return axiosFlaskApi({
        method: 'GET',
        url: '/logout'
    })
}