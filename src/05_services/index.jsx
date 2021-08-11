
import { useLoginServices } from "./login";
import { useUsuarioServices } from "./config/user";
import { useEmpresaServices } from "./config/empresa";
import {useSigServices} from "./sig"

const useService = () => {
    return {
        useSigServices,
        useLoginServices,
        useUsuarioServices,
        useEmpresaServices
    }
}

export default useService;