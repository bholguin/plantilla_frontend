import { useUsuarioProvider } from "./config/user";
import { useLoginProvider } from "./login";
import { useEmpresaProvider } from "./config/empresa";

const useProvider = () => {
    return {
        useLoginProvider,
        useUsuarioProvider,
        useEmpresaProvider
    }
};

export default useProvider;