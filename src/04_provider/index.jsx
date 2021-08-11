import { useUsuarioProvider } from "./config/user";
import { useLoginProvider } from "./login";
import { useEmpresaProvider } from "./config/empresa";
import { useSigProvider } from "./sig"

const useProvider = () => {
    return {
        useSigProvider,
        useLoginProvider,
        useUsuarioProvider,
        useEmpresaProvider
    }
};

export default useProvider;