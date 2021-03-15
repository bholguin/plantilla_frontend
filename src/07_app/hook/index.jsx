import { useSelector } from "react-redux";
import { appSelector } from "../selectors";

export const useApp = () => {
    const auth = useSelector(appSelector);
    return {
        auth
    }
}