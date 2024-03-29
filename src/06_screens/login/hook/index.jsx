import { useActions } from "../../../01_actions";
import { useSelector } from "react-redux";
import { authSelector } from "../selectors";

export const useLogin = () => {
    const auth = useSelector(authSelector)

    const {
        dispatch,
        useActLogin
    } = useActions()

    const {
        actPostLogin,
        actGetLoginMicrosoft
    } = useActLogin()

    const Login = (data) => dispatch(actPostLogin({
        data,
        onSuccess: () => dispatch(actGetLoginMicrosoft())
    }))

    return {
        auth,
        Login
    }
}