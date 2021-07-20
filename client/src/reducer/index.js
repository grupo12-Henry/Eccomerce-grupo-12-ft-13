import {
  GETCARDS,
  GETDETAILS,
  GETNAMES,
  ORDERPRODUCT,
  GET_USER_DETAILS,
  GETALLPEDIDOS,
  GETPEDIDODETAIL,
  DELETE_LOCAL_STORAGE,
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  GETPEDIDOSBYSTATE,
  PUTPEDIDO,
  ADD_LOCAL_STORAGE,
  CARRITO,
  GET_LOCAL_STORAGE,
  GET_ALL_USERS,
  PEDIDOSUSER,
  POST_USER
} from '../actions'
// import CartItem from '../components/shoppingCart/CartItem';


const initialState = {
  products: [],
  productDetail: {},
  names: [],
  orderProd: [],
  pedidos: [],
  pedidoDetail: {},
  AllClients: [],
  ClientDetails: {},
  pedidosUser: [],
  productCart: [],
  arrayStorages: [],
  user:{},
}


const rootReducer = (state = initialState, action) => {
  // let updatedCart;
  // let updatedItemIndex;
  // const array = JSON.parse(window.localStorage.getItem("array"));
  // window.localStorage.setItem( "array", JSON.stringify( array.length? array=state.productCart :  console.log('falla en local storage') ) );//state.productCart.concat([nuevoItem])
  // console.log(JSON.parse(window.localStorage.getItem("array")))
  switch (action.type) {
    case CARRITO:
      return {
        ...state,
        carritoState: !state.carritoState
      };

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

    case PUTPEDIDO:
      return {};
      //ADMIN DASHBOARD

    case GET_ALL_USERS:
      return {
        ...state,
        AllClients: action.payload,
      };
      
      case POST_USER:
        window.localStorage.setItem('user',JSON.stringify(action.payload))
       return {
         ...state,
         user: action.payload
       } 

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
    case PEDIDOSUSER:
      return {
        ...state,
        pedidosUser: action.payload
      };

    case ADD_TO_CART:
      let nuevoItem = state.products.find(prod => ((prod.id === action.payload)||prod.id===action.payload.id||console.log('marquitos', prod.id)))
      let a = state.productCart.length ? state.productCart.filter(e => (e!== undefined&& nuevoItem!==undefined)? e.id === (nuevoItem.id):null) : ''
      if (a.length) {
         nuevoItem = {
          ...nuevoItem,
          cantidad: (parseInt(a[0].cantidad) + 1)
        }
        state = {
          ...state,
          productCart: state.productCart.filter(e => e.id !== nuevoItem.id)
        }
     
       }

      if (!a.length) {
        nuevoItem = {
          ...nuevoItem,
          cantidad: 1
        }
      }
      let array = JSON.parse(window.localStorage.getItem("array"));
      window.localStorage.setItem("array", JSON.stringify(array = state.productCart.concat(nuevoItem)))
      // window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.concat([nuevoItem]) : array=[nuevoItem])); //state.productCart.concat([nuevoItem])
      // window.localStorage.setItem("array", JSON.stringify((array!=='undefined' && array!==null )? array.filter(e => e.id !== nuevoItem.id)&& array.concat([nuevoItem]) : array=[nuevoItem])); //state.productCart.concat([nuevoItem])

      // console.log(JSON.parse(window.localStorage.getItem("array")))
      console.log('carrito',state.productCart.concat(nuevoItem))
      console.log('array localstorage:', array)
      return {
        ...state,
        productCart: state.productCart.concat(nuevoItem)
      };
      // window.localStorage.setItem("array", JSON.stringify(array = state.productCart))

      /* case ADD_LOCAL_STORAGE:{
      return {
        ...state,
        carritoState: !state.carritoState
      }; */
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


      // ESTO DE ABAJO DEJARLO POR LAS DUDAS PARA EMI Y SANTI
      // case INCREMENT_CART_ITEM_QUANTITY:
      //     updatedCart = [...state.productCart];
      //     updatedItemIndex = updatedCart.findIndex(
      //         item => item.id === action.payload
      //     );
      //     const incrementedItem = {
      //         ...updatedCart[updatedItemIndex]
      //     };
      //     incrementedItem.quantity++;
      //     updatedCart[updatedItemIndex] = incrementedItem;
      //     return {...state, productCart: updatedCart};

      // case DECREMENT_CART_ITEM_QUANTITY:{
      //     updatedCart = [...state.productCart];
      //     updatedItemIndex = updatedCart.findIndex(
      //         item => item.id === action.payload
      //     );
      //     const decrementedItem = {
      //         ...updatedCart[updatedItemIndex]
      //     }
      //     decrementedItem.quantity--;
      //     updatedCart[updatedItemIndex] = decrementedItem;
      //     return {...state, productCart: updatedCart}};

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        productCart: state.productCart.filter(e => e.id !== action.payload)
      }

      /*    case 'RemoveTodo': return state.filter(t => t.id != action.payload)*/ // despues necesito unos cerebritos por aca arriba|^|
      case CLEAR_CART:
        return {
          ...state,
          productCart: []
        };
      case GET_LOCAL_STORAGE: {
        const array = JSON.parse(window.localStorage.getItem("santi"));
        return {
          ...state,
          productCart: array ? state.productCart.slice().concat([array]) : state.productCart
        }
      }
      
    case DELETE_LOCAL_STORAGE: {
      const array = JSON.parse(window.localStorage.getItem('array'));
      const arrayfiltrado = array && array.filter(element => element.id !== action.payload);
      window.localStorage.removeItem('array');
      window.localStorage.setItem('array', JSON.stringify(arrayfiltrado));
      return {
        ...state
      }
    }

    case GET_LOCAL_STORAGE: {
        const array = JSON.parse(window.localStorage.getItem("array"));

        return {
          ...state,
          user: JSON.parse(window.localStorage.getItem('user')),
          arrayStorages: array ? state.arrayStorages.slice().concat([array]) : state.arrayStorages
        }
      }
      case DELETE_LOCAL_STORAGE:{
        const array= JSON.parse(window.localStorage.getItem('array'));
        const arrayfiltrado= array&&array.filter(element=>element.id!==action.payload);
          window.localStorage.removeItem('array');
          window.localStorage.setItem('array',JSON.stringify(arrayfiltrado));
          return {...state}
      }

      case ADD_LOCAL_STORAGE:{
        const array = JSON.parse(window.localStorage.getItem("array"));

       window.localStorage.setItem( "array", JSON.stringify( array? array.concat([action.payload]) : state.arrayStorages.concat([action.payload]) ) );
        return {
          ...state,
          arrayStorages: state.arrayStorages.slice().concat([action.payload])
        }
      }

    default:
      return state;
  };
}

export default rootReducer