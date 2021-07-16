import { PEDIDOSUSER, GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, GETALLPEDIDOS, GETPEDIDOSBYSTATE, GETPEDIDODETAIL } from '../actions'


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
    pedidos:[],
    pedidoDetail:{},
    pedidosUser: []
    // namesq: []
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
            case PEDIDOSUSER:
                return {
                    ...state,
                    pedidosUser:action.payload
                };
        default:
            return state;
    };
}
export default rootReducer;

