import {USUARIO_TYPES as TYPES} from '../../types';
import{
    fetchListGet
}from '../../funciones_generales';

const current_url_api_usuarios = 'usuarios'
//const current_url_api_usuario = 'usuario'


export const fetchUsuarios = (options_action = {}) => {
    return (dispatch) => {
        const dispatches = (response) => {dispatch({ type: TYPES.fetch_all, payload: response })};
        const {limpiar_coleccion = true} = options_action;
        const options = {dispatches, ...options_action, dispatch_method: dispatch, clear_action_type: limpiar_coleccion ? TYPES.clear : null};
        return fetchListGet(current_url_api_usuarios, options)
    }
}
