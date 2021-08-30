import { useEffect } from "react"
import {useActions} from "../../../01_actions"


export const useHome = () => {

    const {dispatch, useActLogin}  = useActions()
    const {actGetTokenMicrosoft} = useActLogin()

    useEffect(()=>{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        console.log(queryString)
        if(urlParams.get('code')){
            console.log(urlParams.get('code'), 'cd');
            const code = urlParams.get('code')
            dispatch(actGetTokenMicrosoft({code}))
        }
        
    }, [dispatch])// eslint-disable-line react-hooks/exhaustive-deps
}