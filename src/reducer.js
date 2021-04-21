export const initialState ={
    user: null
};

export const actionType ={
    SET_USER: "SET_USER",
    REMOVE_USER: "REMOVE_USER"
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            case actionType.REMOVE_USER:
            return{
                ...state,
                user: null
            }


            default:
                return state;
    }
};

export default reducer;