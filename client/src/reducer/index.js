import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, GETALLPEDIDOS, GETPEDIDOSBYSTATE, PUTPEDIDO } from '../actions'


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
    pedidos:[]
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
        default:
            return state;
    };
}
export default rootReducer;

