
import * as LoginService from "./login";
import * as UserService from "./config/user";
import { useEmpresaServices } from "./config/empresa";

const useService = () => {
    return{
        LoginService,
        UserService,
        useEmpresaServices
    }
}

export default useService;