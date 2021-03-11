
import * as LoginService from "./login";
import * as UserService from "./config/user";

const useService = () => {
    return{
        LoginService,
        UserService
    }
}

export default useService;