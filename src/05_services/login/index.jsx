import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'

export const useLoginServices = () => {


    const {
        useLoginProvider
    } = useProvider()

    const {
        getLogout,
        postLogin
    } = useLoginProvider()

    const PostLogin = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(postLogin(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    const GetLogout = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getLogout()))
            } catch (e) {
                reject(e)
            }
        })
    }


    return {
        PostLogin,
        GetLogout
    }

}

