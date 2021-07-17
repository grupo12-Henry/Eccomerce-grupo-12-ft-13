<<<<<<< HEAD
import { GETCARDS, GETDETAILS, GETNAMES, GETALLPEDIDOS,GET_LOCAL_STORAGE,GETPEDIDOSBYSTATE,PUTPEDIDO, ORDERPRODUCT, ADD_TO_CART, REMOVE_ALL_FROM_CART, CLEAR_CART, INCREMENT_CART_ITEM_QUANTITY, DECREMENT_CART_ITEM_QUANTITY  } from '../actions'

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
    let updatedCart;
    let updatedItemIndex;

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
                   
        case GETDETAILS:
            return {
                ...state,
                productDetail: action.payload
            };
        case GETALLPEDIDOS:
            return {};
        case GETPEDIDOSBYSTATE:
            return {};
        case PUTPEDIDO:
            return {};
            //REDUCER CARRITO DE COMPRAS
        case ADD_TO_CART:
               let nuevoItem = state.products.find(prod => prod.id ===action.payload)
               const array = JSON.parse(window.localStorage.getItem("array"));
               window.localStorage.setItem( "array", JSON.stringify( array? array.concat([nuevoItem]) : state.productCart.concat([nuevoItem]) ) );
               console.log(JSON.parse(window.localStorage.getItem("array")))
            return {
                ...state,
                productCart: state.productCart.concat(nuevoItem)
            };
        case GET_LOCAL_STORAGE: {
                const array = JSON.parse(window.localStorage.getItem("array"));
                
                return {
                  ...state,
                  productCart: array ? state.productCart.slice().concat([array]) : state.productCart
                }
              }

            /* case ADD_LOCAL_STORAGE:{
     

     
      return {
        ...state,
        arrayStorages: state.arrayStorages.concat([action.payload])
      }
    } */
        // case ADD_TO_CART:
        //     updatedCart = [...state.productCart];
        //     updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);
        //     if(updatedItemIndex < 0) {
        //         updatedCart.push({...action.payload, quantity: 1});
        //     } else {
        //         const updatedItem = {
        //             ...updatedCart[updatedItemIndex]
        //         };
        //         updatedItem.quantity++;
        //         updatedCart[updatedItemIndex] = updatedItem;
        //     }
        //     return {...state, productCart: updatedCart};

        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.productCart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );
            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };
            incrementedItem.quantity++;
            updatedCart[updatedItemIndex] = incrementedItem;
            return {...state, productCart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.productCart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );
            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };
            decrementedItem.quantity--;
            updatedCart[updatedItemIndex] = decrementedItem;
            return {...state, productCart: updatedCart};

        case REMOVE_ALL_FROM_CART:
            return {
                ...state,
                productCart: state.productCart.filter(p => p.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                productCart: []
            };
        default:
            return state;
        };
                

=======
import {
  PEDIDOSUSER,
  GETCARDS,
  GETDETAILS,
  GETNAMES,
  ORDERPRODUCT,
  GET_ALL_USERS,
  GET_USER_DETAILS,
  GETALLPEDIDOS,
  GETPEDIDOSBYSTATE,
  GETPEDIDODETAIL,
  CLEAR_CART,
  ADD_LOCAL_STORAGE,
  GET_LOCAL_STORAGE,
  DELETE_LOCAL_STORAGE
} from '../actions/index';

const initialState = {
  //PRODUCTOS
  products: [],
  productDetail: {},
  names: [],
  orderProd: [],
  //ADMIN DASH
  pedidos: [],
  pedidoDetail: {},
  AllClients: [],
  ClientDetails: {},
  //CARRITO
  pedidosUser: [],
  productCart: [],
  //LOCAL STORAGE
  arrayStorages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //ESTADOS DE LA PAG EN GRAL.
    case GETCARDS:
      return {
        ...state,
        products: action.payload,
      };
    case GETNAMES:
      return {
        ...state,
        names: action.payload,
      };
    case ORDERPRODUCT:
      return {
        ...state,
        orderProd: action.payload,
      };
    case GETDETAILS:
      return {
        ...state,
        productDetail: action.payload,
      };
      //ADMIN DASHBOARD
    case GET_ALL_USERS:
        return {
          ...state,
          AllClients: action.payload,
        };
    case GET_USER_DETAILS:
      return {
        ...state,
        ClientDetails: action.payload,
      };
    case GETALLPEDIDOS:
      return {
        ...state,
        pedidos: action.payload,
      };
    case GETPEDIDOSBYSTATE:
      return {
        ...state,
        pedidos: action.payload,
      };
    case GETPEDIDODETAIL:
      return {
        ...state,
        pedidoDetail: action.payload,
      };
    // case ADD_TO_CART:
    //   let nuevoItem = state.products.find((prod) => prod.id === action.payload);
    //   if (state.productCart.includes(nuevoItem)) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     productCart: state.productCart.concat(nuevoItem),
    // //   };
    // case REMOVE_ALL_FROM_CART:
    //   return {
    //     ...state,
    //     productCart: state.productCart.filter((p) => p.id !== action.id),
    //   };
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
>>>>>>> main
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
