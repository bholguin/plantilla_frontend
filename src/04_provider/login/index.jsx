
import {
    axiosFlaskApi,
} from '../instances'

export const postLogin = (data) => {
    const api = axiosFlaskApi()
    return api({
        method: 'POST',
        url: '/login',
        data
    })
}

export const getLogout = (token) => {
    const api = axiosFlaskApi(token)
    return api({
        method: 'GET',
        url: '/logout'
    })
}