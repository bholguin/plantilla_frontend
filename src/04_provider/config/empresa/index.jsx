import { axiosFlaskApi } from "../../instances";

export const useEmpresaProvider = () => {

    const getEmpresas = () => {
        return axiosFlaskApi({
            method: 'GET',
            url: '/empresas'
        })
    }

    const postEmpresa = (data) =>{
        console.log(data, 'provider')
        return axiosFlaskApi({
            method: 'POST',
            url: '/empresa',
            data
        })
    }

    return{
        getEmpresas,
        postEmpresa
    }
    
}