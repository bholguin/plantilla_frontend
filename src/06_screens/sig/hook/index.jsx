import { useEffect } from "react"
import { useActions } from "../../../01_actions"

export const useSig = () => {

    const {
        dispatch,
        useActSig
    } = useActions()

    const { actGetDrive } = useActSig()
    useEffect(() => {
        dispatch(actGetDrive())
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps

}