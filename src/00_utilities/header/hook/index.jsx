import { useState } from "react";
import { useActLogin } from '../../../01_actions/login'
import { useDispatch } from "react-redux";

export const useHeader = () => {
    const { actGetLogout } = useActLogin()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const Logout = () => dispatch(actGetLogout())
    const handleDrawer = () => setOpen(!open)

    return {
        open,
        handleDrawer,
        Logout
    }
}