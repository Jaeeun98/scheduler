class ImgStorage {
    async imgUpload(file){
        const data = new FormData();
        const url = 'https://api.cloudinary.com/v1_1/dflys9roo/image/upload'
        data.append('file', file);
        data.append('upload_preset', 'ec1od8tg');

        const result = await fetch(url, {
                method:'POST',
                body:data
            }
        )
        return await result.json();
    }
}

export default ImgStorage;



/*import { storage } from './firebase';
import { ref, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage';

class Storage {
    imgAdd(file){
        console.log(file.name);
        const storageRef = ref(storage, `images/${file.name}`);
        uploadBytesResumable(storageRef, file).then(snapshot => console.log(snapshot))

        
    }
}

export default Storage;

*/