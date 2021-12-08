import { set, ref, onValue, remove, update } from "@firebase/database";
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

    userScheduleChange(id, userId, title, start, end, allDay){
        update(ref(db, `users/${userId}/schedule/${id}`), {
            id : id,
            title : title,
            start : start,
            end : end,
            allDay : allDay,
        })
    }

    userScheduleDel(userId, id){
        remove(ref(db, `users/${userId}/schedule/${id}`));
    }    

    userProfileAdd(userId, fileUrl, fileName, name, aim){
        if(!fileUrl) return;
        set(ref(db, `users/${userId}/profile`), {
            fileUrl : fileUrl,
            fileName : fileName,
            name : name,
            aim : aim,
        })
    }

    userDataGet(userId, onUpdate){
        const dbRef = ref(db, `users/${userId}`);
        onValue(dbRef, async snapshot => {
            const value  = await snapshot.val();
            value && onUpdate(value);
        })

        
    }
}

export default FireData