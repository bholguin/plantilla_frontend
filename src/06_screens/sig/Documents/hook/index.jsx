import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useActions } from "../../../../01_actions"
import { useSelectors } from "../../../../08_selectors"

export const useEmpresaDocuemnts = () => {

    const [items, setItems] = useState([])
    const [breadcbm, setBreadcmb] = useState([])
    const { useSelector, sigSelector } = useSelectors()
    const { breadcrumb } = useSelector(sigSelector)
    const {state} = useLocation()
    const {
        dispatch,
        useActSig
    } = useActions()

    const {
        actGetDrive,
        actGetDriveIntro,
        actClearBreadcrumb,
        actAddBreadcrumb,
        actSetBreadcrumb,
    } = useActSig()

    const onSuccess = ({ data }) => {
        if (!breadcrumb.some((item) => item.id === data.id)) {
            dispatch(actAddBreadcrumb({ breadcrumb: data }))
        }
        dispatch(actGetDriveIntro({ id: data.id, setItems }))
    }

    const onClick = (item) => {
        const file = item.name.split(".")
        if (file[1]) {
            window.open(item.webUrl, '_blank');
        } else {
            dispatch(actGetDrive({ id: item.id, onSuccess }))
        }
    }

    const onBreadcrumbClick = (e, item) => {
        dispatch(actGetDrive({
            id: item.id, onSuccess: ({ data }) => {
                dispatch(actSetBreadcrumb({
                    breadcrumb: [...breadcrumb.filter((i, index) => {
                        if (index <= item.index) return { ...i }
                    })]
                }))
                dispatch(actGetDriveIntro({ id: data.id, setItems }))
            }
        }))
    }

    useEffect(() => {
        setBreadcmb([...breadcrumb.map((item, index) => {
            return {
                text: item.name,
                id: item.id,
                index: index,
                onClick: (index + 1) === breadcrumb.length
                    ? () => {
                    } : onBreadcrumbClick
            }
        })])
    }, [breadcrumb])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log(state)
        const {empresa} = state
        dispatch(actGetDrive({ id: empresa.folder_id, onSuccess }))
        return () => dispatch(actClearBreadcrumb())
    }, [dispatch, state])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        items,
        breadcbm,
        onClick,
    }
}