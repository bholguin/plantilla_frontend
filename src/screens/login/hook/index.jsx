
import { useActLogin } from "../../../01_actions/login";
import { useDispatch } from "react-redux";


export const useLogin = () => {
    const dispatch = useDispatch()
    const {actPostLogin} = useActLogin()
    const Login = (data) => {
        console.log(data, 'hook')
        dispatch(actPostLogin(data))
    }

    return{
        Login
    }
}