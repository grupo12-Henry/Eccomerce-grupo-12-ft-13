import { GETCARDS, GETDETAILS } from '../actions'


const initialState = {
    products: [],
    productDetail: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCARDS:
            return {
                ...state,
                products: action.payload
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

