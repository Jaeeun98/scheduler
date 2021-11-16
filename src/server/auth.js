import { signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import {auth} from "./firebase";

class Auth {
    login(){
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
}

export default Auth;