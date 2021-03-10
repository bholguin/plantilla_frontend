import { actCloseCOEModal } from "../../../01_actions/common";
import { useDispatch, useSelector } from "react-redux";
import { coeSelector } from "../selectors";

export const useCOE = () => {
    const {open, initialValues, buttonProps } = useSelector(coeSelector)
    const dispatch = useDispatch()
    const closeModal = () => dispatch(actCloseCOEModal())

    return{
        open,
        initialValues,
        buttonProps,
        closeModal
    }
}