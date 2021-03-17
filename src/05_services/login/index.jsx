import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'

export const PostLogin = (data) => {
    const { LoginProvider } = useProvider();
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(LoginProvider.postLogin(data)))
        } catch (e) {
            console.log(e, 'error login')
            reject(e)
        }
    })
}

export const GetLogout = () => {
    const { LoginProvider } = useProvider()
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(LoginProvider.getLogout()))
        } catch (e) {
            reject(e)
        }
    })
}