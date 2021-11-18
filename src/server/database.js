import { set, ref } from "@firebase/database";
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

    userProfileAdd(userId, url, name, aim){
        set(ref(db, `users/${userId}/profile`), {
            url : url,
            name : name,
            aim : aim,
        })
    }
}

export default FireData