import axios from "axios";
//ACTIONS DE LA PAGINA EN GRAL.
export const GETCARDS = "GETCARDS";
export const GETDETAILS = "GETDETAILS";
export const GETNAMES = "GETNAMES";
export const ORDERPRODUCT = "ORDERPRODUCT";
export const POST_USER = "POST_USER";
//ACTIONS DEL ADMIN
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const PUT_USER = "PUT_USER";
export const GETALLPEDIDOS = "GETALLPEDIDOS";
export const GETPEDIDOSBYSTATE = "GETPEDIDOSBYSTATE";
export const GETPEDIDODETAIL = "GETPEDIDODETAIL";
export const PUTPEDIDO = "PUTPEDIDO";
//ACTIONS DEL LOCAL STORAGE
export const GET_LOCAL_STORAGE= 'GET_LOCAL_STORAGE';
export const DELETE_LOCAL_STORAGE= 'DELETE_LOCAL_STORAGE'
export const ADD_LOCAL_STORAGE= 'ADD_LOCAL_STORAGE'

//ACTIONS DE SHOPPING-CART
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
// export const ADD_ONE_FROM_CART = 'ADD_ONE_FROM_CART'
// export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'
export const PEDIDOSUSER = 'PEDIDOSUSER';


export function removeProductCart (id){
  return {
      type: REMOVE_ALL_FROM_CART,
      payload: id 
  }
}
//ESTADO QUE SE LLAME productCart :[{},{},{}] =[]


//   export const addProductCart = producto => {
//     return {
//         type: ADD_TO_CART,
//         payload: producto
//     }
// };

// export const incrementCartQuantity = id => {
//     return{
//         type: INCREMENT_CART_ITEM_QUANTITY,
//         payload: id
//     }
// };
// export const decrementCartQuantity = id => {
//     return {
//         type: DECREMENT_CART_ITEM_QUANTITY,
//         payload: id
//     }
//   };
  

export function addProductCart(payload) {
  return {
    type: ADD_TO_CART, 
    payload 
   };
};

export function addLocalStorage(payload) {
  return {
    type:ADD_LOCAL_STORAGE,
    payload
  };
};

export function deleteLocalStorage(payload) {
  return {
    type:DELETE_LOCAL_STORAGE,
    payload
  };
}

export function getDetail (id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/id/' + id)
        .then(response =>
            {
            dispatch({ type: GETDETAILS, payload: response.data})
            console.log('ESTA DATA',response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function getLocalStorage (payload){
    return {
      type:GET_LOCAL_STORAGE,
      payload
    };
};

export function deleteProductCart(payload) {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
}

export function ClearCart() {
  //ver que le pasamos al reducer
  return {
    type: CLEAR_CART,
    //  payload
  };
}

export function getProducts() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/productos/all")
      .then((response) => {
        dispatch({
          type: GETCARDS,
          payload: response.data.filter((el) => el.id),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}


export function orderProduct({ offset, type, order, name }) {
  return (dispatch) => {
    const datos = `offset=${offset}&${type}=type&${order}=order&${name}=name`;
    axios
      .get("http://localhost:3001/admin/productos/order?" + datos)
      .then((response) => {
        dispatch({ type: ORDERPRODUCT, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getpedidosUser (id) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/pedidos/${id}`)
        .then(response => {
            dispatch({ type: PEDIDOSUSER, payload: response.data})
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

export function getNames() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/admin/productos/names")
      .then((response) => {
        dispatch({ type: GETNAMES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
//ACTIONS DEL ADMIN

//USUARIOS GET, POST Y PUT y DELETE
export function getAllUsers() {
  return (dispatch) => {
    axios.get("http://localhost:3001/admin/users/all")
    .then((response) => {
      dispatch({ type: GET_ALL_USERS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
  };
}

export function getUserDetails(id) {
  return (dispatch) => {
    axios.get("http://localhost:3001/admin/users/id/"+ id)
    .then((response) => {
      dispatch({ type: GET_USER_DETAILS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
  };
}

export function postUsuarios(usuario) {
  return (dispatch) => {
    axios.post("http://localhost:3001/admin/clientesPost", usuario);
  };
}

export function putUsuarios(id, usuario) {
  return (dispatch) => {
    console.log(id, usuario)
    axios.put("http://localhost:3001/admin/users/"+id, usuario)
    .then((response) => {
      dispatch({ type: PUT_USER, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export function deleteUsuarios(id) {
  axios.delete(`http://localhost:3001/admin/client/${id}`);
}

//PRODUCTOS POST Y PUT Y DELETE
export function addProduct(product) {
  console.log("llegue hasta action");
  return (dispatch) => {
    axios.post("http://localhost:3001/admin/productos", product);
  };
}
export async function editProduct(id, payload) {
  await axios.put("http://localhost:3001/admin/productos/" + id, payload);
}
export async function deleteProduct(id) {
  await axios.delete(`http://localhost:3001/admin/producto/${id}`);
}

//PEDIDOS
export function getAllPedidos() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/admin/pedidos/all")
      .then((response) => {
        dispatch({ type: GETALLPEDIDOS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function getPedidosByState(state) {
  return async (dispatch) => {
    try {
      const response = await axios
        .get("http://localhost:3001/admin/pedidos/filter?valor=" + state)
        .then((response) => {
          dispatch({ type: GETPEDIDOSBYSTATE, payload: response.data });
        });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getPedidoDetail(id) {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/admin/detallePedido/" + id)
      .then((response) => {
        dispatch({ type: GETPEDIDODETAIL, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function putPedido(id, payload) {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/admin/pedidos/id/${id}`, payload)
      .then((response) => {
        dispatch({ type: PUTPEDIDO, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function createUser(obj){
  return (dispatch)=>{
    try{
      axios.post('http://localhost:3001/admin/clientesPost',obj)
    .then((response)=>{
    console.log(response.data);
    window.localStorage.setItem("user",JSON.stringify(response.data));  
      return dispatch({ type:POST_USER,Payload:response.data})})
    }catch(err){
      console.log(err);
    }
    
  }
}
// axios.defaults.baseURL ="http://localhost:3001";
