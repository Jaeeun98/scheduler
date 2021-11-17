const ID_SAVE = 'userData/ID_SAVE';  //user id 저장
//const ID_DEL = 'userData/ID_DEL';  //user id 삭제(회원 탈퇴), logout

export const idSave = data => ({type : ID_SAVE, data});
//export const idDel = id => ({type : ID_DEL, id});

const initialState = {
    id : '',
    email : ''
}

export default function userData(state = initialState, action){
    switch (action.type) {
        case ID_SAVE:
            return {
                ...state,
                id : action.data.id,
                email : action.data.email
            };
            break;
            
        default:
            return state
    }
}
