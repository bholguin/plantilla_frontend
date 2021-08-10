import React from "react";
import axios from "axios";
import { Fragment } from "react";
import { tokenSelector } from "./selectors";
import { useSelector, useDispatch } from "react-redux";
import { useActLogin } from '../../01_actions/login'
import { useToast } from "../../00_utilities/Toast/hook";

export const axiosFlaskApi = axios.create({
    baseURL: process.env.REACT_APP_FLASK_API
})


export const interceptorHandler = (WrappedComponent) => props => {
    const dispatch = useDispatch()
    const { actTokenError } = useActLogin()
    const { Toast, ERROR } = useToast()
    const handleResponseError = (error) => {
        const callToast = (content) => {
            Toast(content, ERROR)
        }
        switch (error.response.status) {
            case 400:
                callToast(error.response.data)
                break
            case 401:
                localStorage.clear()
                dispatch(actTokenError())
                break
            case 403:
                callToast(error.response.data)
                break
            case 404:
                callToast(error.response.data)
                break
            case 422:
                callToast(error.response.data)
                break
            case 500:
                callToast(error.response.data)
                break
            default:
                break
            // not handler error
        }
    }
    const token = useSelector(tokenSelector)
    axiosFlaskApi.defaults.headers = {
        Authorization: `Bearer ${token}`
    }
    axiosFlaskApi.interceptors.response.use((response) => {
        return response
    }, async (error) => {
        await handleResponseError(error)
        throw error
    })

    return (
        <Fragment>
            <WrappedComponent props={props} />
        </Fragment>
    )
}
