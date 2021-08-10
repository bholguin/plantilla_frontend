import { useUsuarioProvider } from "./config/user";
import * as LoginProvider from "./login";
import { useEmpresaProvider } from "./config/empresa";

const useProvider = () => {
    return {
        LoginProvider,
        useUsuarioProvider,
        useEmpresaProvider
    }
};

export default useProvider;