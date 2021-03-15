import { useActLogin } from "../../../01_actions/login";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../selectors";

export const useLogin = () => {
    const auth = useSelector(authSelector)
    const dispatch = useDispatch()
    const { actPostLogin } = useActLogin()
    const Login = (data) => dispatch(actPostLogin(data))

    return {
        Login,
        auth
    }
}