import { axiosFlaskApi } from "../../instances";


export const useUsuarioProvider = () => {

    const getUsers = () => {
        return axiosFlaskApi({
            method: 'GET',
            url: '/usuarios'
        })
    }

    const postUser = (data) => {
        return axiosFlaskApi({
            method: 'POST',
            url: '/usuario',
            data
        })
    }

    const putUser = (data) => {
        return axiosFlaskApi({
            method: 'PUT',
            url: '/usuario',
            data
        })
    }

    const deleteUser = (id) => {
        return axiosFlaskApi({
            method: 'DELETE',
            url: `/usuario/${id}`
        })
    }


    return {
        getUsers,
        postUser,
        putUser,
        deleteUser
    }
}
