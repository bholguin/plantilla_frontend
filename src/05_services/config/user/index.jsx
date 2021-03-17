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