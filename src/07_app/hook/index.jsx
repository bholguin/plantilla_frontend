import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActLogin } from "../../01_actions/login";
import { appSelector } from "../selectors";

export const useApp = () => {
    const auth = useSelector(appSelector);
    const dispatch = useDispatch()
    const { actLoadToken } = useActLogin()
    useEffect(() => {
        dispatch(actLoadToken())
    }, [dispatch]);
    return {
        auth
    }
}