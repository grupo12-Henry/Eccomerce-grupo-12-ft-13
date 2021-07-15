import { GETCARDS, GETDETAILS, GETNAMES, ORDERPRODUCT, ADD_TO_CART,REMOVE_ALL_FROM_CART,CLEAR_CART } from '../actions'
import CartItem from '../components/shoppingCart/CartItem';


const initialState = {
    products: [],
    productDetail: {},
    names: [],
    orderProd: [],
    productCart: [],
    productCartCantidad:[]
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
                   
        case GETDETAILS:
            return {
                ...state,
                productDetail: action.payload
            }
        case ADD_TO_CART:
            if(state.productCart.includes(action.payload)){
                    return {...state,
                        productCartCantidad: state.productCartCantidad.cantidad++
                        }
                    }else{
                        return {
                            ...state,
                        productCart: state.productCart.push(action.payload),
                        productCartCantidad : state.productCartCantidad.push({id: action.payload.id, cantidad: 1})  
                        }  
                    }  
                   
                //     return ({...state, productCartCantidad:l }) //state.productCart.filter(e=>e!==action.payload).concat(a)})// despues necesito unos cerebritos por aca
                // }
                  

            // si id inlcude poductCartCantidad.includes(action.id)
            //  productCart.cantidad ++
             
            // let action.payload = state.products.find(prod => prod.id ===action.payload)
            // if(state.productCart.includes(action.payload)){
            // //    let a = state.productCart.filter(e=> e==action.payload).push({estado: 1})
            //     return ({...state, productCartCantidad:l }) //state.productCart.filter(e=>e!==action.payload).concat(a)})// despues necesito unos cerebritos por aca
            // }
            // return {
            //     ...state,
            //     productCart: state.productCart.concat(action.payload), productCartCantidad: state.productCartCantidad.push(action.payload.push({cantidad:1}))
            // }
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

        default:
            return state;
        };
                

    }

export default rootReducer;

