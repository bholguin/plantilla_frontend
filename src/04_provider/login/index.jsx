import {axiosFlaskApiLogin} from '../instances'


export const postLogin = (data) => {
    console.log(data, 'login')
    return axiosFlaskApiLogin({
        method: 'POST',
        url: '/login',
        data
    })
}