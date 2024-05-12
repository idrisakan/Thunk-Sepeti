import ActionTypes from "../actionTypes";

ActionTypes

const initialState = {
    isLoading: false,
    error: null,
    restaurant: null,
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PROD_LOADING:
            return {...state, isLoading:true};

        case ActionTypes.PROD_ERROR:
            return {...state, isLoading:false, error:action.payload};

        case ActionTypes.PROD_SUCCES:
            return {...state, 
                isLoading:false,
                error:null,
                restaurant:action.payload[0].data,
                products:action.payload[1].data,
            
            
            
            };
    
            default:
                return state;
     }

};
 export default productReducer;