import { axiosGraphApi } from "../instances"

export const useSigProvider = () => {

    const getDrive = () => {
        return axiosGraphApi({
            method: 'GET',
            url: '/drive/root/children'
        })
    }

    const getDriveIntro = ({id}) => {
        return axiosGraphApi({
            method: 'GET',
            url: `/drive/items/${id}/children`
        })
    }

    const CreateFolder = ({id, data}) => {
        return axiosGraphApi({
            method: 'post',
            url: `/drive/items/${id}/children`,
            data
        })
    }

    return{
        getDrive,
        getDriveIntro,
        CreateFolder
    }

}