import { axiosGraphApi } from "../instances"

export const useSigProvider = () => {

    const getDrive = () => {
        return axiosGraphApi({
            method: 'GET',
            url: '/drives'
        })
    }

    return{
        getDrive
    }

}