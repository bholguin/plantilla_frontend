import {useEffect, useState} from "react"
import {useActions} from "../../../../01_actions"
import {useSelectors} from "../../../../08_selectors"

export const useEmpresaDocuemnts = () => {

    const {useSelector, sigSelector} = useSelectors()

    const {
        dispatch,
        useActSig
    } = useActions()

    const [items, setItems] = useState([])
    const [actual] = useState("EB26AF30A2946CBE!101")
    const [breadcbm, setBreadcmb] = useState([])

    const {
        actGetDrive,
        actGetDriveIntro,
        actClearBreadcrumb,
        actAddBreadcrumb,
        actSetBreadcrumb,
        actPostCreateFolder
    } = useActSig()

    const {breadcrumb} = useSelector(sigSelector)


    const onSuccess = ({data}) => {
        if (!breadcrumb.some((item) => item.id === data.id)) {
            dispatch(actAddBreadcrumb({breadcrumb: data}))
        }
        dispatch(actGetDriveIntro({id: data.id, setItems}))
    }

    const onClick = (item) => {
        const file = item.name.split(".")
        if (file[1]) {
            window.open(item.webUrl, '_blank');
        } else {
            dispatch(actGetDrive({id: item.id, onSuccess}))
        }
    }

    const onBreadcrumbClick = (e, item) => {
        dispatch(actGetDrive({
            id: item.id, onSuccess: ({data}) => {
                dispatch(actSetBreadcrumb({
                    breadcrumb: [...breadcrumb.filter((i, index) => {
                        if (index <= item.index) return {...i}
                    })]
                }))
                dispatch(actGetDriveIntro({id: data.id, setItems}))
            }
        }))
    }

    const createFolder = () => {
        dispatch(actPostCreateFolder({
            id: actual, data: {
                "name": "New Folder graph",
                "folder": {},
                "@microsoft.graph.conflictBehavior": "rename"
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
        dispatch(actGetDrive({id: actual, onSuccess}))
        return () => dispatch(actClearBreadcrumb())
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        items,
        breadcbm,
        onClick,
        createFolder
    }
}