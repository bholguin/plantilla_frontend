import { axiosGraphApi } from "../instances"

export const useSigProvider = () => {

    const getDrive = ({id}) => {
        return axiosGraphApi({
            method: 'GET',
            url: `/drive/items/${id}/`
        })
    }

    const getDriveIntro = ({ id }) => {
        return axiosGraphApi({
            method: 'GET',
            url: `/drive/items/${id}/children`
        })
    }

    const getRootFolder = () => {
        return axiosGraphApi({
            method: 'GET',
            url: `/drive/root:/${process.env.REACT_ROOT_FOLDER}:/children`
        })
    }

    const CreateFolder = ({ folder }) => {
        ///me/drive/root/children
        return axiosGraphApi({
            method: 'POST',
            url: `/drive/items/${process.env.REACT_APP_ROOT_FOLDER_ID}/children`,
            data: folder
        })
    }

    return {
        getDrive,
        getDriveIntro,
        CreateFolder,
        getRootFolder
    }

}