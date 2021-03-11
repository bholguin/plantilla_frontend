
import {
    axiosFlaskApi,
    axiosFlaskApiLogin
} from '../instances'

export const postLogin = (data) => {
    return axiosFlaskApiLogin({
        method: 'POST',
        url: '/login',
        data
    })
}

export const getLogout = () =>{
    return axiosFlaskApi({
        method: 'GET',
        url: '/logout'
    })
}