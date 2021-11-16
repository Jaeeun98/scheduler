const ID_SAVE = 'userData/ID_SAVE';  //user id 저장
//const ID_DEL = 'userData/ID_DEL';  //user id 삭제(회원 탈퇴), logout

export const idSave = id => ({type : ID_SAVE, id});
//export const idDel = id => ({type : ID_DEL, id});

const initialState = {
    id : '',
}

export default function userData(state = initialState, action){
    switch (action.type) {
        case ID_SAVE:
            return {
                ...state,
                id : action.id
            };
            break;
            
        default:
            return state
    }
}
