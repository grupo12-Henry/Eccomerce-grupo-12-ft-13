<<<<<<< HEAD
import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, GETALLPEDIDOS, GETPEDIDOSBYSTATE, GETPEDIDODETAIL, ADD_TO_CART,REMOVE_ALL_FROM_CART,CLEAR_CART } from '../actions'

=======
import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, ADD_TO_CART,REMOVE_ALL_FROM_CART,CLEAR_CART, CARRITO } from '../actions'
import CartItem from '../components/shoppingCart/CartItem';
>>>>>>> db0f27a201dfc5e3656959be068dafa7cf4ac519


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
<<<<<<< HEAD
    pedidos:[],
    pedidoDetail:{},
    productCart: []
=======
    productCart: [],
    arrayStorages: [],
    carritoState: false

>>>>>>> db0f27a201dfc5e3656959be068dafa7cf4ac519
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARRITO:
            return{
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
            
        case ADD_TO_CART:
            let nuevoItem = state.products.find(prod => prod.id ===action.payload)
            let     a = state.productCart.length?state.productCart.filter(e=>e.id===(nuevoItem.id)):''
            if(a.length){
                console.log('existe', a[0].cantidad, a[0])
                console.log(typeof(a[0].cantidad))

                nuevoItem = {...nuevoItem , cantidad:(parseInt(a[0].cantidad)+1)}
                 console.log('nuevoItem',nuevoItem)
                state= {...state, productCart: state.productCart.filter(e=>e.id!==nuevoItem.id)}
            }
            if (!a.length){
                console.log('no existe')
                nuevoItem = {...nuevoItem, cantidad:1}
            } 
            console.log('cart', state.productCart)
            return {
                ...state,
                productCart: state.productCart.concat(nuevoItem)
            }
            
        case REMOVE_ALL_FROM_CART:
             return {
                ...state,
                 productCart: state.productCart.filter(e  => e.id !== action.payload)
            }
               
            /*    case 'RemoveTodo': return state.filter(t => t.id != action.payload)*/ // despues necesito unos cerebritos por aca arriba|^|
        case CLEAR_CART:
            return {
                ...state,
                productCart: []
            }
            // case GET_LOCAL_STORAGE: {
            //     const array = JSON.parse(window.localStorage.getItem("array"));
                
            //     return {
            //       ...state,
            //       arrayStorages: array ? state.arrayStorages.slice().concat([array]) : state.arrayStorages
            //     }
            //   }
            //   case DELETE_LOCAL_STORAGE:{
            //     const array= JSON.parse(window.localStorage.getItem('array'));
            //     const arrayfiltrado= array&&array.filter(element=>element.id!==action.payload);
            //       window.localStorage.removeItem('array');
            //       window.localStorage.setItem('array',JSON.stringify(arrayfiltrado));
            //       return {...state}
            //   }
          
            //   case ADD_LOCAL_STORAGE:{
            //     const array = JSON.parse(window.localStorage.getItem("array"));
          
            //    window.localStorage.setItem( "array", JSON.stringify( array? array.concat([action.payload]) : state.arrayStorages.concat([action.payload]) ) );
            //     return {
            //       ...state,
            //       arrayStorages: state.arrayStorages.slice().concat([action.payload])
            //     }
            //   }

        default:
            return state;
    };
}
export default rootReducer;

