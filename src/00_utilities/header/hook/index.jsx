import { useState } from "react";
import { useActions } from '../../../01_actions'

export const useHeader = () => {

    const{
        dispatch,
        useActLogin
    } = useActions()
    
    const { actGetLogout } = useActLogin()

    const [open, setOpen] = useState(false);
    const Logout = () => dispatch(actGetLogout())
    const handleDrawer = () => setOpen(!open)

    return {
        open,
        Logout,
        handleDrawer
    }
}