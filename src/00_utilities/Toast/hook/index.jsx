import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

export const useToast = () => {

    const SUCCESS = 'success';
    const CREATE_SUCCESS = "Se creo con exito."
    const EDIT_SUCCESS = "Se edito con exito."
    const DELETE_SUCCESS = "Se eliminó con exito"
    const ERROR = 'error';

    const Toast = (type) => {
        const n = new Notyf({
            duration: 3000,
            dismissible: true,
            position: {
                x: 'right',
                y: 'top',
            }
        });

        switch (type) {
            case SUCCESS:
                n.success(SUCCESS)
                break;
            case CREATE_SUCCESS:
                n.success(CREATE_SUCCESS)
                break;
            case EDIT_SUCCESS:
                n.success(EDIT_SUCCESS)
                break;
            case DELETE_SUCCESS:
                n.success(DELETE_SUCCESS)
                break;
            case ERROR:
                n.error(ERROR);
                break;
            default:
                break;
        }
    }
    return {
        SUCCESS,
        ERROR,
        CREATE_SUCCESS,
        EDIT_SUCCESS,
        DELETE_SUCCESS,
        Toast
    }

}