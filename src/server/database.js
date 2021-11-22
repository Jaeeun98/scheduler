import { set, ref, get, child, onValue } from "@firebase/database";
import { db } from "./firebase";

class FireData {
    userAdd(id, email){
        set(ref(db, `users/${id}`), {
            email : email,
        })
    }

    userScheduleAdd(id, userId, title, start, end, allDay){
        set(ref(db, `users/${userId}/schedule/${id}`), {
            id : id,
            title : title,
            start : start,
            end : end,
            allDay : allDay,
        })
    }

    userProfileAdd(userId, fileUrl, fileName, name, aim){
        set(ref(db, `users/${userId}/profile`), {
            fileUrl : fileUrl,
            fileName : fileName,
            name : name,
            aim : aim,
        })
    }

    userProfileGet(userId, onUpdate){
        const dbRef = ref(db, `users/${userId}/profile`);
        onValue(dbRef, async snapshot => {
            const value  = await snapshot.val();
            value && onUpdate(value);
        })

        
    }
}

export default FireData