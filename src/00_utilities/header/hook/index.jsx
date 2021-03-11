import { useState } from "react";
import { actGetLogout } from '../../../01_actions/login'
import { useDispatch } from "react-redux";

export const useHeader = () => {
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