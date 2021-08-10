import { axiosFlaskApi } from "../../instances";

export const useEmpresaProvider = () => {

    const getEmpresas = () => {
        return axiosFlaskApi({
            method: 'GET',
            url: '/empresas'
        })
    }

    const postEmpresa = (data) => {
        return axiosFlaskApi({
            method: 'POST',
            url: '/empresa',
            data
        })
    }

    const putEmpresa = (data) => {
        return axiosFlaskApi({
            method: 'PUT',
            url: '/empresa',
            data
        })
    }

    const deleteEmpresa = (id) =>{
        return axiosFlaskApi({
            method: 'DELETE',
            url: `/empresa/${id}`
        })
    }

    return {
        getEmpresas,
        postEmpresa,
        putEmpresa,
        deleteEmpresa
    }

}