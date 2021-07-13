import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS';
export const GETNAMES = 'GETNAMES';
export const ORDERPRODUCT = 'ORDERPRODUCT';
export const GETALLPEDIDOS = 'GETALLPEDIDOS';
export const GETPEDIDOSBYSTATE = 'GETPEDIDOSBYSTATE';
export const PUTPEDIDO = 'PUTPEDIDO';


// export const GETNAMESQ = 'GETNAMESQ'



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

//USUARIOS
export function postUsuarios(usuario ) {
    console.log('llegue hasta action marcos')
    return (dispatch) => {
        axios.post('http://localhost:3001/admin/clientesPost', usuario)
    }
}
//PRODUCTOS
export function addProduct(product) {
    console.log('llegue hasta action')
    return (dispatch) => {
        axios.post('http://localhost:3001/admin/productos', product)
    }
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
}
export function getPedidosByState(state) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/admin/pedidos/filter/?valor=${state}`)
        .then(response => {
            dispatch({ type: GETPEDIDOSBYSTATE, payload: response.data})
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
}
// axios.defaults.baseURL ="http://localhost:3001";