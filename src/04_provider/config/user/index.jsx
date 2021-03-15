import { axiosFlaskApi } from "../../instances";


export const getUsers = (token) => {
    return axiosFlaskApi({
        method: 'GET',
        url: '/usuarios'
    })
}