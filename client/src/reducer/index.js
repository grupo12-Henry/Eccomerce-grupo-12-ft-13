import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, GETALLPEDIDOS, GETPEDIDOSBYSTATE, GETPEDIDODETAIL } from '../actions'
import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, ADD_TO_CART,REMOVE_ALL_FROM_CART,CLEAR_CART } from '../actions'


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
    pedidos:[],
    pedidoDetail:{}
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
        // case GETNAMESQ:
        //     return {
        //         ...state,
        //         namesq: action.payload
        //     };

        case GETDETAILS:
            return {
                ...state,
                productDetail: action.payload
            };
        case GETALLPEDIDOS:
            return {
                ...state,
                pedidos:action.payload
            };
        case GETPEDIDOSBYSTATE:
            return {
                ...state,
                pedidos:action.payload
            };
        case GETPEDIDODETAIL:
            return {
                ...state,
                pedidoDetail:action.payload
            };
            }
        case ADD_TO_CART:
            let nuevoItem = state.products.find(prod => prod.id ===action.payload)
            if(state.productCart.includes(nuevoItem)){
                return state
            }
            return {
                ...state,
                productCart: state.productCart.concat(nuevoItem)
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

        default:
            return state;
    };
}
export default rootReducer;

