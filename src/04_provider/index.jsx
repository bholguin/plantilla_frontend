import * as UserProvider from "./config/user";
import * as LoginProvider from "./login";
import { useEmpresaProvider } from "./config/empresa";

const useProvider = () => {
    return{
        LoginProvider,
        UserProvider,
        useEmpresaProvider
    }
};

export default useProvider;