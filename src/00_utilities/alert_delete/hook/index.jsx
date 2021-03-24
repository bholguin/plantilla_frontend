import { deleteModalSelector } from "../selectors";
import { useSelector, useDispatch } from "react-redux";
import { actCloseDeleteItem } from '../../../01_actions/common'

export const useAlertDelete = () => {
    const dispatch = useDispatch()
    const { open, submit, item } = useSelector(deleteModalSelector)
    const closeModal = () => dispatch(actCloseDeleteItem())
    const deleteItem = () => dispatch(submit(item, () => closeModal()))
    
    return{
        open,
        closeModal,
        deleteItem
    }
}