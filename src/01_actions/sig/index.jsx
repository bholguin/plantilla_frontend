import useService from "../../05_services";

export const useActSig = () => {

    const { useSigServices } = useService()

    const {
        GetDrive
    } = useSigServices()


    const actGetDrive = () => async (dispatch) => {
        try {
            const res = await GetDrive()
            console.log(res)
        } catch (e) {

        }
    }

    return {
        actGetDrive
    }

}