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