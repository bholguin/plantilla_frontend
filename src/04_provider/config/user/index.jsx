import { axiosFlaskApi } from "../../instances";


export const getUsers = () => {
    return axiosFlaskApi({
        method: 'GET',
        url: '/usuarios'
    })
}

export const postUser = (data) =>{
    console.log(data, 'provider')
    return axiosFlaskApi({
        method: 'POST',
        url: '/usuario',
        data
    })
}

export const putUser = (data) =>{
    console.log(data, 'provider')
    return axiosFlaskApi({
        method: 'PUT',
        url: '/usuario',
        data
    })
}

export const deleteUser = (id) =>{
    console.log(id, 'data')
    return axiosFlaskApi({
        method: 'DELETE',
        url: `/usuario/${id}`
    })
}