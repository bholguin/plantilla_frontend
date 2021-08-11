import { authSelector } from "./auth";
import { empresasSelector } from "./config/empresa";
import { userSelector } from "./config/usuario"
import { useSelector } from "react-redux";

export const useSelectors = () => {
    return{
        useSelector,
        authSelector,
        userSelector,
        empresasSelector
    }
}