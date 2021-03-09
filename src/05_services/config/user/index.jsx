import useProvider from "../../../04_provider";

export const GetUsers = () => {
    const { UserProvider } = useProvider();
    return new Promise(async(resolve, reject)=>{
        try {
            resolve(await UserProvider.getUsers())
        } catch (e) {
            reject(e)
        }
    })
}