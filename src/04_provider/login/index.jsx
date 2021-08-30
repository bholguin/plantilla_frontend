
import { axiosFlaskApi, axiosMicrosoftLogin } from '../instances'

export const useLoginProvider = () => {

    const generateCodeExchange = async () => {
        const encoder = new TextEncoder();
        const data = encoder.encode("An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.");
        const hash = await crypto.subtle.digest('SHA-256', data)
        const hashArray = Array.from(new Uint8Array(hash));                     // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        const base = window.atob(hashHex)
        return base
    }

    const postLogin = (data) => {
        return axiosFlaskApi({
            method: 'POST',
            url: '/login',
            data
        })
    }

    const getLogout = () => {
        return axiosFlaskApi({
            method: 'GET',
            url: '/logout'
        })
    }

    const microsoftLogin = async () => {
        const base  = await generateCodeExchange()
        return axiosMicrosoftLogin({
            method: "GET",
            url: "/oauth2/v2.0/authorize",
            params: {
                client_id: process.env.REACT_APP_MICROSOFT_GRAPH_KEY,
                response_type: 'code',
                redirect_uri: "http://localhost:3000/",
                response_mode: 'query',
                scope: "offline_access User.Read Files.Read Files.Read.All Files.Read.Selected Files.ReadWrite Files.ReadWrite.All",
                code_challenge: base,
                code_challenge_method: "plain",
                state: 12345
            }
        })
    }

    const microsoftGetToken = async ({ code }) => {
        const base  = await generateCodeExchange()
        const form = new FormData()
        form.append("client_id", process.env.REACT_APP_MICROSOFT_GRAPH_KEY)
        form.append("code", code)
        form.append("redirect_uri", "http://localhost:3000/")
        form.append("grant_type", "authorization_code")
        form.append("scope", "offline_access User.Read Files.Read Files.Read.All Files.Read.Selected Files.ReadWrite Files.ReadWrite.All")
        form.append("code_verifier", base)
        form.append('state', 12345)

        return axiosMicrosoftLogin({
            method: "POST",
            url:"/oauth2/v2.0/token",
            data: form,
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }

    return {
        postLogin,
        getLogout,
        microsoftLogin,
        microsoftGetToken
    }

}

