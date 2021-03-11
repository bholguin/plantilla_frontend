import axios from "axios";
import { authSelector } from "../selectors";
import { useSelector } from "react-redux";

export const useInstance = () => {
    //const token = useSelector(authSelector)
    //console.log(token, 'token')
    const axiosFlaskApi =  axios.create({
        baseURL: process.env.REACT_APP_FLASK_API,
        headers: {
            'Authorization': localStorage.token ? `Bearer ${localStorage.token}` : ''
        }
    })
    
    const axiosFlaskApiLogin = axios.create({
        baseURL: process.env.REACT_APP_FLASK_API
    })

    return{
        axiosFlaskApi,
        axiosFlaskApiLogin
    }

}

