import {
  PEDIDOSUSER,
  GETCARDS,
  GETDETAILS,
  GETNAMES,
  ORDERPRODUCT,
  GETALLPEDIDOS,
  GETPEDIDOSBYSTATE,
  GETPEDIDODETAIL,
  CLEAR_CART,
  ADD_LOCAL_STORAGE,
  GET_LOCAL_STORAGE,
  DELETE_LOCAL_STORAGE
} from '../actions/index';

export const initialState = {
  products: [],
  productDetail: {},
  names: [],
  orderProd: [],
  pedidos: [],
  pedidoDetail: {},
  pedidosUser: [],
  productCart: [],
  arrayStorages: [],
};

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
                case CLEAR_CART:
      return {
        ...state,
        productCart: [],
      };

    // case DELETE_LOCAL_STORAGE: {
    //   return {};
    // }

    case GET_LOCAL_STORAGE: {
      const array = JSON.parse(window.localStorage.getItem("array"));
      console.log(array);
      return {
        ...state,
        arrayStorages: array ? state.arrayStorages.slice().concat([array]) : state.arrayStorages.slice()
      }
    }
    case DELETE_LOCAL_STORAGE:{
      const array= JSON.parse(window.localStorage.getItem('array'));
      const arrayfiltrado= array&&array.filter(element=>element.id!==action.payload);
        window.localStorage.removeItem('array');
        window.localStorage.setItem('array',JSON.stringify(arrayfiltrado));
        return {...state}
    }

    case ADD_LOCAL_STORAGE: {
      const array = JSON.parse(window.localStorage.getItem("array"));
      window.localStorage.setItem(
        "array",
        JSON.stringify(
          array
            ? array.concat([action.payload])
            : state.arrayStorages.concat([action.payload])
        )
      );
    };
    default:
        return state;
    };
}
export default rootReducer;
