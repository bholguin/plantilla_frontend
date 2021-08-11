import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'

export const useSigServices = () => {

    const {
        useSigProvider
    } = useProvider()

    const {
        getDrive
    } = useSigProvider()

    const GetDrive = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getDrive()))
            } catch (e) {
                reject(e)
            }
        })
    }

    return{
        GetDrive
    }
}