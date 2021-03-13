import { axiosFlaskApi } from "../../instances";


export const getUsers = (token) => {
    const api = axiosFlaskApi(token)
    return api({
        method: 'GET',
        url: '/usuarios'
    })
}