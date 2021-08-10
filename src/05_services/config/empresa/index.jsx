import useProvider from "../../../04_provider";
import { trackPromise } from 'react-promise-tracker'


export const useEmpresaServices = () => {

    const {
        useEmpresaProvider
    } = useProvider()

    const {
        getEmpresas,
        postEmpresa,
        putEmpresa,
        deleteEmpresa
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

    const PutEmpresa = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(putEmpresa(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    const DeleteEmpresa = (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(deleteEmpresa(data)))
            } catch (e) {
                reject(e)
            }
        })
    }

    return {
        GetEmpresas,
        PostEmpresa,
        PutEmpresa,
        DeleteEmpresa
    }

}