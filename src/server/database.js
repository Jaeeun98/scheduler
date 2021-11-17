import { set, ref } from "@firebase/database";
import { db } from "./firebase";

class FireData {
    
    userAdd(id, email){

        set(ref(db, `users/${id}`), {
            email : email,
        })
    }
}

export default FireData