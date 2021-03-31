import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

export const useToast = () => {

    const SUCCESS = 'success';
    const ERROR = 'error';

    const Toast = (msj, type) => {
        const n = new Notyf({
            duration: 3000,
            dismissible: true,
            position:{
                x: 'right',
                y: 'top',
            }
        });

        switch (type) {
            case SUCCESS:
                n.success(msj)
                break;
            case ERROR:
                n.error(msj);
                break;
            default:
                break;
        }
    }
    return {
        SUCCESS,
        ERROR,
        Toast
    }

}