import useService from "../../05_services";

import {SIG_TYPE} from "../types"

export const useActSig = () => {

    const {useSigServices} = useService()

    const {
        GetDrive,
        GetDriveIntro,
        PostCreateFolder
    } = useSigServices()


    const actGetDrive = ({id, onSuccess}) => async (dispatch) => {
        try {
            const res = await GetDrive({id})
            onSuccess && onSuccess({data: res.data})
        } catch (e) {

        }
    }

    const actGetDriveIntro = ({id, setItems, onSuccess}) => async (dispatch) => {
        try {
            const res = await GetDriveIntro({id})
            setItems(res.data.value)
            onSuccess && onSuccess({data: res.data})
        } catch (e) {

        }
    }

    const actPostCreateFolder = ({data}) => async (dispatch) => {
        try {
            const {nombre} = data
            const folder = {
                "name": nombre,
                "folder": {},
                "@microsoft.graph.conflictBehavior": "rename"
            }
        
            const res = await PostCreateFolder({folder})
            return res
        } catch (e) {

        }
    }

    const actAddBreadcrumb = ({breadcrumb}) => (dispatch) => {
        dispatch({
            type: SIG_TYPE.ADD_BREADCRUMB,
            payload: breadcrumb
        })
    }

    const actSetBreadcrumb = ({breadcrumb}) => (dispatch) => {
        dispatch({
            type: SIG_TYPE.SET_BREADCRUMB,
            payload: breadcrumb
        })
    }

    const actClearBreadcrumb = () => (dispatch) => {
        dispatch({
            type: SIG_TYPE.CLEAR_BREADCRUMB,
        })
    }

    return {
        actGetDrive,
        actGetDriveIntro,
        actPostCreateFolder,
        actAddBreadcrumb,
        actClearBreadcrumb,
        actSetBreadcrumb
    }

}