import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";

class Auth {

    getAuth(userChange){
        onAuthStateChanged(auth, user => {
            userChange(user)
        })
    }

    login(){
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    logout(){
        signOut(auth);
    }
}

export default Auth;