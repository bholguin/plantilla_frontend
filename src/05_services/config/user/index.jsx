import useProvider from "../../../04_provider";
import { trackPromise } from 'react-promise-tracker'


export const useUsuarioServices = () => {

    const {
        useUsuarioProvider
    } = useProvider()

    const {
        getUsers,
        postUser,
        putUser,
        deleteUser
    } = useUsuarioProvider()

    const GetUsers = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getUsers()))
            } catch (e) {
                reject(e)
            }
        })
    }

    const PostUser = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(postUser(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    const PutUser = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(putUser(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    const DeleteUser = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(deleteUser(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    return {
        GetUsers,
        PostUser,
        PutUser,
        DeleteUser
    }
}


