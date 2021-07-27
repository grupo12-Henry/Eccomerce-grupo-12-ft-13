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
  POST_USER,
  UPDATE_FROM_CART,
  ADD_TO_WISHLIST,
  REPEAT_ORDER,
  REMOVE_FROM_WISHLIST,
  GETFAVORITES,
  CHECKOUT,
} from "../actions";
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
  wishList:[]
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
         wishList:action.payload.products,
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
//ACTION PARA AGREGAR PRODUCTOS AL CARRITO, CUANDO DAMOS CLICK EN AGREGAR SOBRE EL PRODUCTO
//logica agregar funciona perfect!
case ADD_TO_CART:
  let nuevoItem = state.products.find(prod => ((action.payload.productId)?prod.id=== action.payload.productId: (prod.id === action.payload)))
  let a = state.productCart.length ? state.productCart.filter(e => (e!== undefined&& nuevoItem!==undefined)? e.id === (nuevoItem.id):null) : ''
  if (a.length) {
        nuevoItem = {
          ...nuevoItem,
          cantidad: !action.payload.cantidad ?(parseInt(a[0].cantidad) + 1):(parseInt(a[0].cantidad)+action.payload.cantidad) // 
        }
        state = {
          ...state,
          productCart: state.productCart.filter(e => e.id !== nuevoItem.id)
        }
  }

  if (!a.length) {
    !action.payload.cantidad?
    nuevoItem = {
      ...nuevoItem,
      cantidad: 1
    }: nuevoItem = {
      ... nuevoItem, cantidad:action.payload.cantidad
    }
  }
  let array = JSON.parse(window.localStorage.getItem("array"));
  window.localStorage.setItem("array", JSON.stringify(array = state.productCart.concat(nuevoItem)))
  return {
    ...state,
    productCart: state.productCart.concat(nuevoItem)
  };

      //ACTUALIZAR CANTIDAD DEL CARRITO EN UN PROD EN PARTICULAR 
      case UPDATE_FROM_CART:
        console.log(action.payload)
        state = {
          ...state,
          productCart: state.productCart
        }
        return{
          ...state,
          productCart: state.productCart.map(e => e.id === action.payload.id? e = {...e, cantidad :(parseInt(action.payload.cantidad))} :e)
        } 
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        productCart: state.productCart.filter(e => e.id !== action.payload)
      }
    case REPEAT_ORDER:
      state.productCart = []
      console.log('quiero 2', action.payload)
    action.payload?.forEach(e=>{
        // let newItem = {id:e.id, image: e.image, name:e.name, cantidad: e.order_detail.cantidad, price: e.price};
       let a = state.products.find(el=> el.id === e.id );
        a= {...a, cantidad: e.order_detail.cantidad}
        state.productCart= state.productCart.concat(a)
        
      })
      // let arrayLocal = JSON.parse(window.localStorage.getItem("array"));
      window.localStorage.setItem('array',JSON.stringify(state.productCart))
      console.log('productCart',state.productCart)
      //  let productosOrder = action.payload.forEach(e=>state.products.find(el=> el.id===e.id)) //e.id e.order_detail.cantidad)
      return state
      
      /*    case 'RemoveTodo': return state.filter(t => t.id != action.payload)*/ // despues necesito unos cerebritos por aca arriba|^|
      case CLEAR_CART:
        return {
          ...state,
          productCart: []
        };
      // case GET_LOCAL_STORAGE: {
      //   const array = JSON.parse(window.localStorage.getItem("santi"));
      //   return {
      //     ...state,
      //     productCart: array ? state.productCart.slice().concat([array]) : state.productCart
      //   }
      // }
      
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
        const user=JSON.parse(window.localStorage.getItem('user'))
        return {
          ...state,
          user: user,
          arrayStorages: array ? state.arrayStorages?.slice().concat([array]) : state.arrayStorages
        }
      }

   

      case ADD_LOCAL_STORAGE:{
        const array = JSON.parse(window.localStorage.getItem("array"));
        window.localStorage.setItem( "array", JSON.stringify( array? array.concat([action.payload]) : state.arrayStorages.concat([action.payload]) ) );
        return {
          ...state,
          arrayStorages: state.arrayStorages.slice().concat([action.payload])
        }
      }
 



    case ADD_TO_WISHLIST: {

      return {
        ...state,
        wishList: state.wishList.concat(action.payload),
      };
    }
   case GETFAVORITES:{
     return {
       ...state,
       wishList: action.payload
     }
   }
    case REMOVE_FROM_WISHLIST: {
     /* let user= JSON.parse(window.localStorage.getItem('user'))
     user.products= user.products.filter(product =>product.id ===action.payload)
     window.localStorage.removeItem('user')
     window.localStorage.setItem('user',JSON.stringify(user)) */ 
     
      return {
        ...state,
        wishList: state.wishList.filter(el => el.id !== action.payload.productId)
      }
  }
  case CHECKOUT:{
    return(console.log('reducer', action.payload))
  }

    default:
      return state;
  };
}

export default rootReducer