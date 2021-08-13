import useService from "../../05_services";

export const useActSig = () => {

    const { useSigServices } = useService()

    const {
        GetDrive,
        GetDriveIntro,
        PostCreateFolder
    } = useSigServices()


    const actGetDrive = ({ setItems }) => async (dispatch) => {
        try {
            const res = await GetDrive()
            setItems(res.data.value)
        } catch (e) {

        }
    }

    const actGetDriveIntro = ({ id, setItems }) => async (dispatch) => {
        try {
            const res = await GetDriveIntro({ id })
            setItems(res.data.value)
        } catch (e) {

        }
    }

    const actPostCreateFolder = ({ id, data }) => async (dispatch) => {
        try {
            const res = await PostCreateFolder({ id, data })
            console.log(res)
        } catch (e) {

        }
    }

    return {
        actGetDrive,
        actGetDriveIntro,
        actPostCreateFolder
    }

}