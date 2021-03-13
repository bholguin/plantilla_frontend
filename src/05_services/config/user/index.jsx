import useProvider from "../../../04_provider";

export const GetUsers = (token) => {
    const { UserProvider } = useProvider();
    return new Promise(async(resolve, reject)=>{
        try {
            resolve(await UserProvider.getUsers(token))
        } catch (e) {
            reject(e)
        }
    })
}