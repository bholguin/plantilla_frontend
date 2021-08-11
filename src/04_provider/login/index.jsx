
import { axiosFlaskApi } from '../instances'


export const useLoginProvider = () => {

    const postLogin = (data) => {
        return axiosFlaskApi({
            method: 'POST',
            url: '/login',
            data
        })
    }
    
    const getLogout = () => {
        return axiosFlaskApi({
            method: 'GET',
            url: '/logout'
        })
    }

    return{
        postLogin,
        getLogout
    }


}

