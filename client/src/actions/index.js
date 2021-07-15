import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS';
export const GETNAMES = 'GETNAMES';
export const ORDERPRODUCT = 'ORDERPRODUCT';
export const GETALLPEDIDOS = 'GETALLPEDIDOS';
export const GETPEDIDOSBYSTATE = 'GETPEDIDOSBYSTATE';
export const GETPEDIDODETAIL = 'GETPEDIDODETAIL';
export const PUTPEDIDO = 'PUTPEDIDO';
//ACTIONS DE SHOPPING-CART
export const ADD_TO_CART = 'ADD_TO_CART'
// export const ADD_ONE_FROM_CART = 'ADD_ONE_FROM_CART'
// export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'


// export const GETNAMESQ = 'GETNAMESQ'

// Perdon EMI NO ME DI CUENTA JAJA
// LISTO tranqui
// no hay drama

export function removeProductCart (id){
  console.log('hla')
}
//ESTADO QUE SE LLAME productCart :[{},{},{}] =[]
export function addProductCart(payload) {
    return {
        type: ADD_TO_CART,
        payload,

        };
         //
  }

  export function ClearCart() { //ver que le pasamos al reducer
    return {
         type: CLEAR_CART, 
        //  payload 
        };
  }



export function getProducts () {
    return (dispatch) => {
        axios.get('http://localhost:3001/productos/all')
        .then(response => {
            dispatch({ type: GETCARDS, payload: response.data.filter(el => el.id)})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function getDetail (id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/id/' + id)
        .then(response => {
            dispatch({ type: GETDETAILS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function orderProduct ({offset, type, order, name}) {
    return (dispatch) => {
        const datos = `offset=${offset}&${type}=type&${order}=order&${name}=name`
        axios.get('http://localhost:3001/admin/productos/order?' + datos )
        .then(response => {
            dispatch({ type: ORDERPRODUCT, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

// export function getNamesQuery(name){
//     return (dispatch) => {
//         axios.get('http://localhost:3001/productos/?name='+ name)
//         .then(response => {
//             dispatch({ type: GETNAMESQ, payload: response.data})
//         })
//         .catch((err) =>{
//             console.log(err)
//         })
//     }
// }
export function getNames(){
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/names')
        .then(response => {
            dispatch({ type: GETNAMES, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
//ACTIONS DEL ADMIN

//USUARIOS POST Y PUT y DELETE
export function postUsuarios(usuario ) {
    console.log('llegue hasta action marcos')
    return (dispatch) => {
        axios.post('http://localhost:3001/admin/clientesPost', usuario)
    }
}

export function putUsuarios(usuario ) {
    axios.put(`http://localhost:3001/admin/users/${usuario.id}`, usuario)
}

export function deleteUsuarios(id ) {
    axios.delete(`http://localhost:3001/admin/client/${id}`)
}

//PRODUCTOS POST Y PUT Y DELETE
export function addProduct(product) {
    console.log('llegue hasta action')
    return (dispatch) => {
        axios.post('http://localhost:3001/admin/productos', product)
    }
}
export async function editProduct(id, payload) {
    await axios.put('http://localhost:3001/admin/productos/' + id, payload)     
}
export async function deleteProduct(id) {
    await axios.delete(`http://localhost:3001/admin/producto/${id}`)
}

//PEDIDOS
export function getAllPedidos() {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/pedidos/all')
        .then(response => {
            dispatch({ type: GETALLPEDIDOS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};
export function getPedidosByState(state) {
    return async (dispatch) => {
        try{
           const response = await axios.get("http://localhost:3001/admin/pedidos/filter?valor="+state)
           .then (response => {
               dispatch({ type: GETPEDIDOSBYSTATE, payload: response.data})
           }) 

        } catch (err){
            console.log(err)
        }
    }
};
export function getPedidoDetail(id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/detallePedido/'+id)
        .then(response => {
            dispatch({ type: GETPEDIDODETAIL, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
export function putPedido(id, payload) {
    return (dispatch) => {
        axios.put(`http://localhost:3001/admin/pedidos/id/${id}`, payload)
        .then(response => {
            dispatch({ type: PUTPEDIDO, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};
// axios.defaults.baseURL ="http://localhost:3001";