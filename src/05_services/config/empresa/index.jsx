import useProvider from "../../../04_provider";
import { trackPromise } from 'react-promise-tracker'


export const useEmpresaServices = () => {

    const {
        useEmpresaProvider
    } = useProvider()

    const {
        getEmpresas,
        postEmpresa
    } = useEmpresaProvider()


    const GetEmpresas = () => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getEmpresas()))
            } catch (e) {
                reject(e)
            }
        })
    }

    const PostEmpresa = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(postEmpresa(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    return {
        GetEmpresas,
        PostEmpresa
    }

}