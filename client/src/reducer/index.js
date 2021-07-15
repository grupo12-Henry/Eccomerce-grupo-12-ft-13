<<<<<<< HEAD
import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, GETALLPEDIDOS, GETPEDIDOSBYSTATE, PUTPEDIDO } from '../actions'
=======
import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, ADD_TO_CART,REMOVE_ALL_FROM_CART,CLEAR_CART } from '../actions'
>>>>>>> 59fb442f32e06d491f51608962d0f9c40ccdcca8


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
    pedidos:[],
    // namesq: []
    productCart: []
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
        case ORDERPRODUCT:
            return {
                ...state,
                orderProd: action.payload
            };
<<<<<<< HEAD
        // case GETNAMESQ:
        //     return {
        //         ...state,
        //         namesq: action.payload
        //     };
=======
                   
>>>>>>> 59fb442f32e06d491f51608962d0f9c40ccdcca8
        case GETDETAILS:
            return {
                ...state,
                productDetail: action.payload
<<<<<<< HEAD
            };
        case GETALLPEDIDOS:
            return {};
        case GETPEDIDOSBYSTATE:
            return {};
        case PUTPEDIDO:
            return {};
=======
            }
        case ADD_TO_CART:
            return {
                ...state,
                productCart: state.productCart.concat(action.payload)
            }
        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                productCart: state.productCart.filter(p => p.id !== action.id)
            }
        case CLEAR_CART:
            return {
                ...state,
                productCart: []
            }

>>>>>>> 59fb442f32e06d491f51608962d0f9c40ccdcca8
        default:
            return state;
        };
                

    }

export default rootReducer;

