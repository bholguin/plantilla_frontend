import useProvider from "../../../04_provider";
import { trackPromise } from 'react-promise-tracker'

export const GetUsers = () => {
    const { UserProvider } = useProvider();
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(UserProvider.getUsers()))
        } catch (e) {
            reject(e)
        }
    })
}


export const PostUsers = (data) => {
    const { UserProvider } = useProvider();
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(UserProvider.postUser(data)))
        } catch (e) {
            reject(e)
        }
    })
}

export const PutUsers = (data) => {
    const { UserProvider } = useProvider();
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(UserProvider.putUser(data)))
        } catch (e) {
            reject(e)
        }
    })
}

export const DeleteUsers = (data) => {
    const { UserProvider } = useProvider();
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await trackPromise(UserProvider.deleteUser(data)))
        } catch (e) {
            reject(e)
        }
    })
}