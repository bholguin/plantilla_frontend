import axios from "axios/index";
import React from 'react';
import * as actions from "./index";
import {CONSTAN} from '../00_utilities/constantes/index';
import {SubmissionError} from 'redux-form';

const axios_instance = axios.create({
    baseURL: CONSTAN.API
});

export function createRequest(request, options = {}) {
    const {
        dispatches = null,
        callback = null,
        callback_error = null,
        dispatch_method = null,
        clear_action_type = null,
        mensaje_cargando = '',
        show_cargando = true,
    } = options;

    //if (clear_action_type) {
    //    dispatch_method({type: clear_action_type})
    //}
    //if (dispatch_method && show_cargando) {
    //    dispatch_method(actions.cargando(mensaje_cargando))
    //}
    console.log('options', options)
    return request
        .then(response => {
            console.log(response)
            if (dispatches) {
                console.log('entro al dispatch')
                dispatches(response)
            }
        }).catch(error => {
                if (callback_error) {
                    callback_error(error)
                }
                if (error.response) {
                    if (error.response.status === 400) {
                        
                    } else if (error.response.status === 401) {
                        dispatch_method({type: "AUTHENTICATION_ERROR"})
                    } else if (error.response.status === 403) {

                    } else if (402 < error.response.status < 600) {

                    } else {
                        if (error.response.data) {
                            console.log(error.response)
                        }
                    }
                } else if (!error.response) {
                    if (error.message === 'Network Error') {

                    } else {
                        console.log(error)

                    }
                }
            }
        );
}

export function fetchListGet(url, options) {
    console.log(`%cFETCH LIST - %c${url.toUpperCase()}`, 'color:red', 'color:blue');
    const mensaje_cargando = `Consultando ${url.toUpperCase()}`;
    const FULL_URL = url;
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Bearer ${localStorage.token}`; 
    }
    axios_instance.defaults.headers = headers;
    const request = axios_instance.get(FULL_URL);
    return createRequest(request, {...options, mensaje_cargando});
}

export function fetchListGetURLParameters(url, options) {
    console.log(`%cFETCH LIST PARAMETROS - %c${url.toUpperCase()}`, 'color:red', 'color:blue');
    const mensaje_cargando = `Consultando ${url.toUpperCase()}`;
    const FULL_URL = `${url}&format=json`;
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    const request = axios_instance.get(FULL_URL);
    return createRequest(request, {...options, mensaje_cargando});
}

export function fetchObject(url, id, options) {
    console.log(`%cFETCH OBJETO - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Consultando elemento en ${url.toUpperCase()}`;
    const FULL_URL = `${url}/${id}/?format=json`;
    const request = axios_instance.get(FULL_URL);
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    return createRequest(request, {...options, mensaje_cargando});
}


export function updateObject(url, id, values, options, config = null) {
    console.log(`%cUPDATE OBJETO - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Actualizando elemento en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    const FULL_URL = `${url}/${id}/`;
    const request = axios_instance.put(FULL_URL, values, config);
    return createRequest(request, {...options, mensaje_cargando});
}


export function createObject(url, values, options) {
    console.log(`%cCREATE OBJETO - %c${url.toUpperCase()}`, 'color:red', 'color:blue');
    const mensaje_cargando = `Creando elemento en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    const FULL_URL = `${url}/`;
    const request = axios_instance.post(FULL_URL, values);
    return createRequest(request, {...options, mensaje_cargando});
}


export function deleteObject(url, id, options) {
    console.log(`%cDELETE OBJETO - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Eliminando elemento en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {"Content-Type": "application/json"};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    const FULL_URL = `${url}/${id}/`;
    const request = axios_instance.delete(FULL_URL);
    return createRequest(request, {...options, mensaje_cargando});
}

export function uploadArchivo(url, id, method, values, options) {
    console.log(`%cAPI UPLOAD ARCHIVO ${method.toUpperCase()} CON PARMAETROS - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Ejecutando ${method.toUpperCase()} en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
        headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    axios_instance.defaults.headers = headers;
    const FULL_URL = `${url}/${id}/${method}/`;
    const request = axios_instance.post(FULL_URL, values, {responseType: 'arraybuffer'});
    return createRequest(request, {...options, mensaje_cargando});
}

export function callApiMethodPost(url, id, method, options) {
    console.log(`%cAPI METODO ${method.toUpperCase()} - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Ejecutando ${method.toUpperCase()} en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
    }
    axios_instance.defaults.headers = headers;
    const FULL_URL = `${url}/${id}/${method}/`;
    const request = axios_instance.post(FULL_URL);
    return createRequest(request, {...options, mensaje_cargando});
}

export function callApiMethodPostParameters(url, id = null, method, values, options) {
    console.log(`%cAPI METODO ${method.toUpperCase()} CON PARMAETROS - %c${url.toUpperCase()} - %cID ${id}`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Ejecutando ${method.toUpperCase()} en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const headers = {};
    if (localStorage.token) {
        headers["Authorization"] = `Token ${localStorage.token}`;
        headers["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
    }
    axios_instance.defaults.headers = headers;
    var FULL_URL = null;
    if(id){
        FULL_URL = `${url}/${id}/${method}/`;
    }else{
        FULL_URL = `${url}/${method}/`;
    }
    const request = axios_instance.post(FULL_URL, values);
    return createRequest(request, {...options, mensaje_cargando});
}

export function fetchObjectWithParameterPDF(url, options) {
    console.log(`%cFETCH LIST PARAMETROS - %c${url.toUpperCase()} PARA PDF`, 'color:red', 'color:blue');
    const FULL_URL = `${url}&format=json`;
    const request = axios_instance.get(FULL_URL, {responseType: 'arraybuffer'});
    return createRequest(request, {...options, mensaje_cargando: ''});
}

export function callApiMethodPostParametersPDF(url, id, method, parameters, options) {
    console.log(`%cAPI METODO ${method.toUpperCase()} CON PARMAETROS - %c${url.toUpperCase()} - %cID ${id} PARA PDF`, 'color:red', 'color:blue', 'color:green');
    const mensaje_cargando = `Ejecutando PDF ${method.toUpperCase()} en ${url.toUpperCase()}`;
    axios_instance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios_instance.defaults.xsrfCookieName = "csrftoken";
    const FULL_URL = `${url}/${id}/${method}/`;
    const request = axios_instance.post(FULL_URL, parameters, {responseType: 'arraybuffer'});
    return createRequest(request, {...options, mensaje_cargando});
}