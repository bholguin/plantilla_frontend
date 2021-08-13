import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'

export const useSigServices = () => {

    const {
        useSigProvider
    } = useProvider()

    const {
        getDrive,
        getDriveIntro,
        CreateFolder
    } = useSigProvider()

    const GetDrive = ({id}) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getDrive({id})))
            } catch (e) {
                reject(e)
            }
        })
    }

    const GetDriveIntro = ({ id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getDriveIntro({ id })))
            } catch (e) {
                reject(e)
            }
        })
    }

    const PostCreateFolder = ({ id, data }) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(CreateFolder({ id, data })))
            } catch (e) {
                reject(e)
            }
        })
    }

    return {
        GetDrive,
        GetDriveIntro,
        PostCreateFolder
    }
}