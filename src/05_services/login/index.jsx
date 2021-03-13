import useProvider from "../../04_provider";

export const PostLogin = (data) => {
    const { LoginProvider } = useProvider();
    return new Promise(async(resolve, reject)=>{
        try {
            resolve(await LoginProvider.postLogin(data))
        } catch (e) {
            console.log(e, 'error login')
            reject(e)
        }
    })
}

export const GetLogout = (token) =>{
    const {LoginProvider} = useProvider()
    return new Promise(async(resolve, reject) => {
        try {
            resolve (await LoginProvider.getLogout(token))
        } catch (e) {
            reject(e)
        }
    })
}