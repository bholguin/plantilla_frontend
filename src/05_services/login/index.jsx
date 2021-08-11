import useProvider from "../../04_provider";
import { trackPromise } from 'react-promise-tracker'
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

export const useLoginServices = () => {

    const { instance } = useMsal();

    const {
        useLoginProvider
    } = useProvider()

    const {
        getLogout,
        postLogin,
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
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(instance.loginRedirect(loginRequest)))
            } catch (e) {
                reject(e)
            }
        })
    }


    return {
        PostLogin,
        GetLogout,
        GetLoginMicrosoft
    }

}

