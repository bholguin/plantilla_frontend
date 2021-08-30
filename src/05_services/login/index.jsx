import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'
import { loginRequest } from "../../authConfig";

export const useLoginServices = () => {

    const {
        useLoginProvider
    } = useProvider()

    const {
        getLogout,
        postLogin,
        microsoftLogin,
        microsoftGetToken
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

    const GetLoginMicrosoft = () => {
        console.log(loginRequest)
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(microsoftLogin()))
            } catch (e) {
                reject(e)
            }
        })
    }

    const GetTokenMicrosoft = ({code}) => {
        console.log(loginRequest)
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(microsoftGetToken({code})))
            } catch (e) {
                reject(e)
            }
        })
    }

    return {
        PostLogin,
        GetLogout,
        GetLoginMicrosoft,
        GetTokenMicrosoft
    }

}

