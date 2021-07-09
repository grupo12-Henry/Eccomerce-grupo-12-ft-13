import { GETCARDS, GETDETAILS, GETNAMES } from '../actions'


const initialState = {
    products: [],
    productDetail: {},
    names: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCARDS:
            return {
                ...state,
                products: action.payload
            };
            
        case GETNAMES:
            return {
                ...state,
                names: action.payload
            };
            
        case GETDETAILS:
            return {
                ...state,
                productDetail: action.payload
            }

        default:
            return state;
        };
                

    }

export default rootReducer;

