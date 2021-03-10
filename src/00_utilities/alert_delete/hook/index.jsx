import { deleteModalSelector } from "../selectors";
import { useSelector, useDispatch } from "react-redux";
import { actCloseDeleteItem } from '../../../01_actions/common'

export const useAlertDelete = () => {
    const dispatch = useDispatch()
    const { open } = useSelector(deleteModalSelector)
    const closeModal = () => dispatch(actCloseDeleteItem())
    return{
        open,
        closeModal
    }
}