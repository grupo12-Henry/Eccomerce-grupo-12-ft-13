import { GETCARDS } from '../actions'


const initialState = {
    products: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCARDS:
            return {
                ...state,
                products: action.payload
            };
            default:
            return state;
        }
    }

export default rootReducer;

