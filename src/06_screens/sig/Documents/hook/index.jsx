import { useEffect, useState } from "react"
import { useActions } from "../../../../01_actions"

export const useEmpresaDocuemnts = () => {

    const {
        dispatch,
        useActSig
    } = useActions()

    const [items, setItems] = useState([])

    const { actGetDrive, actGetDriveIntro } = useActSig()

    const onClock = (item) => {
        console.log(item)
        dispatch(actGetDriveIntro({ id: item.id, setItems }))
    }


    useEffect(() => {
        dispatch(actGetDrive({ setItems }))
    }, [dispatch])

    return {
        items,
        onClock
    }
}