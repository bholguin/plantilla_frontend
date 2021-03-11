import useProvider from "../../04_provider";

export const PostLogin = (data) => {
    const { LoginProvider } = useProvider();
    return new Promise(async(resolve, reject)=>{
        try {
            resolve(await LoginProvider.postLogin(data))
        } catch (e) {
            reject(e)
        }
    })
}

export const GetLogout = () =>{
    const {LoginProvider} = useProvider()
    return new Promise(async(resolve, reject) => {
        try {
            resolve (await LoginProvider.getLogout())
        } catch (e) {
            reject(e)
        }
    })
}