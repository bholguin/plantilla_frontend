import { axiosFlaskApi } from "../../instances";


export const getUsers = () => {
    return axiosFlaskApi({
        method: 'GET',
        url: '/usuarios'
    })
}