import { useEffect } from "react";
import { userSelector } from "../selectors";
import { useDispatch, useSelector} from "react-redux";
import { actGetUsers } from "../../../../01_actions/config/user";


export const useUser = () => {
    const dispatch = useDispatch()
    const users = useSelector(userSelector)
    const postUser = () => {

    }

    const OpenCOEModal = () =>{}

    useEffect(()=>{
        dispatch(actGetUsers())
    },[dispatch])

    console.log(users, 'users')
    
    return{
        users,
        postUser,
        OpenCOEModal
    }
}