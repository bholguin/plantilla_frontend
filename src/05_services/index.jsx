
import { useLoginServices } from "./login";
import { useUsuarioServices } from "./config/user";
import { useEmpresaServices } from "./config/empresa";

const useService = () => {
    return {
        useLoginServices,
        useUsuarioServices,
        useEmpresaServices
    }
}

export default useService;