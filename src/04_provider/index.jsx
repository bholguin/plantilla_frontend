import * as UserProvider from "./config/user";
import * as LoginProvider from "./login";

const useProvider = () => {
    return{
        LoginProvider,
        UserProvider
    }
};

export default useProvider;