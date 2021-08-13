import { useEffect } from "react"
import { useActions } from "../../../01_actions"
import { useSelectors } from "../../../08_selectors"
import { useHistory } from "react-router-dom"

export const useSig = () => {

    const history = useHistory()

    const {
        useSelector,
        empresasSelector
    } = useSelectors()

    const {
        dispatch,
        //useActSig,
        useActEmpresa
    } = useActions()

    const empresas = useSelector(empresasSelector)
    const { actGetEmpresas } = useActEmpresa()
    //const { actGetDrive } = useActSig()

    const goToDocuments = (empresa) => history.push('/app/sig/documents', { empresa })

    useEffect(() => {
        dispatch(actGetEmpresas())
        //dispatch(actGetDrive())
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps


    return {
        empresas,
        goToDocuments
    }

}