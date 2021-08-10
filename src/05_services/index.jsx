
import * as LoginService from "./login";
import { useUsuarioServices } from "./config/user";
import { useEmpresaServices } from "./config/empresa";

const useService = () => {
    return {
        LoginService,
        useUsuarioServices,
        useEmpresaServices
    }
}

export default useService;