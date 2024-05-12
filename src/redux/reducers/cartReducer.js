import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    cart: [],
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CART_LOADING:
            return {...state, isLoading: null};

        case ActionTypes.CART_ERROR:
            return {...state, isLoading: false, error: action.payload};

        case ActionTypes.CART_SUCCES:
            return {...state, isLoading: false, error: null, cart: action.payload};

            case ActionTypes.ADD_ITEM:
       // mevcut elemanların üzerine yeri eleman ekle 
        const updatedCard = state.cart.concat(action.payload);
        return { ...state, cart: updatedCard};

        case ActionTypes.UPDATE_ITEM:
            // actionun payloadı izle gelen elemanın id sinden  yola çıkarak dizideki halini bulduk ve güncelledik
            const updatedArr = state.cart.map ((i) => i.id === action.payload.id ? action.payload : i );
            return { ...state, cart:updatedArr}

            case ActionTypes.DELETE_ITEM:
                //id si bilinen elemanı diziden  kaldır
                const filtred = state.cart.filter((i) => i.id !== action.payload);

                return { ...state, cart: filtred};

        
        default:
        return state;
    }
}
export default cartReducer;