import axios from 'axios';
import jwt from 'jsonwebtoken'
const {secret}= {secret:process.env.REACT_APP_SECRET_TOKEN};
// export const DELETE_PROD_FROM_ORDER = 'DELETE_PROD_FROM_ORDER'
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS';
export const GETNAMES = 'GETNAMES';
export const ORDERPRODUCT = 'ORDERPRODUCT';
export const GETALLPEDIDOS = 'GETALLPEDIDOS';
export const GETPEDIDOSBYSTATE = 'GETPEDIDOSBYSTATE';
export const GETPEDIDODETAIL = 'GETPEDIDODETAIL';
export const PUTPEDIDO = 'PUTPEDIDO';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_ONE_FROM_CART = 'ADD_ONE_FROM_CART';
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE';
export const DELETE_LOCAL_STORAGE = 'DELETE_LOCAL_STORAGE';
export const ADD_LOCAL_STORAGE = 'ADD_LOCAL_STORAGE';
export const POST_USER = "POST_USER";
export const PUT_USER = "PUT_USER";
export const ADDNEWPRODUCT = "ADDNEWPRODUCT";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const PEDIDOSUSER = 'PEDIDOSUSER';
export const PEDIDOUSER = 'PEDIDOUSER';
export const CARRITO = 'CARRITO'
export const SET_LOADING_TO_TRUE = 'SET_LOADING_TO_TRUE'
export const UPDATE_FROM_CART = 'UPDATE_FROM_CART'
export const REPEAT_ORDER = 'REPEAT_ORDER'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const GETFAVORITES = 'GETFAVORITES';
export const CHECKOUT = 'CHECKOUT'
export const POST_REVIEW = 'POST_REVIEW'





// export function deleteProdFromOrder(idOrder, idProd) {
//   return (dispatch) => {
//     axios.delete(`http://localhost:3001/admin/pedidos/id/${idOrder}?idProd=${idProd}`)
//       .then(response => {
//         if (response) alert('Se eliminó producto del pedido');
//         dispatch({
//           type: DELETE_PROD_FROM_ORDER,
//           payload: idProd
//         })
//       })
//         .catch((err) => {
//           console.log(err)
//         })
//   }
// }

export function getUser(mail) {
  return (dispatch) => {
    try {
      axios.get('http://localhost:3001/admin/userMail?mail=' + mail)
      .then(response => 
        dispatch({
        type: POST_USER,
        payload: response.data
      }))
    }
    catch (error) {
      console.log(error)
    }
  }
}

export function postReview(id,review) {
  return (dispatch) => {
    try {
    console.log('LA',review)
    axios.post('http://localhost:3001/reviews/'+id, review)
    .then(response => 
      dispatch({
      type: POST_REVIEW,
      payload: response.data,
      
    }))
  }
    catch (error) {
    console.log(error)
  }
}
}


// export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
// export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'

export function carritoEstado() {
  return {
    type: CARRITO,
  };
}

export function getpedidosUser(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pedidos/${id}`)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: PEDIDOSUSER,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};
export function getPedidoUser(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pedido/${id}`)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: PEDIDOUSER,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};


export function orderPost(order) {
  return (dispatch) => {
    // axios.post('http://localhost:3001/orderPost', order)
    axios.post('http://localhost:3001/admin/orderPost', order)
    .then(response=> console.log(response))

  }
}

export function removeProductCart(id) {
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: id
  }
}

//ESTADO QUE SE LLAME productCart :[{},{},{}] =[]
export function addProductCart(payload) {
  return {
    type: ADD_TO_CART,
    payload
  };
  //
}

export function getDetail(id) {
  return (dispatch) => {
    axios.get('http://localhost:3001/productos/' + id)
      .then(response => {
        dispatch({
          type: GETDETAILS,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};


export function getLocalStorage(payload) {
  return {
    type: GET_LOCAL_STORAGE,
    payload
  };
};

export function deleteProductCart(payload) {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
}

//FUNCION QUE ACTUALIZA LA CANTIDAD EN EL CARRITO ASOCIADO AL COUNTER ON CHANGE
export function updateProductCart(payload) {
  return {
    type: UPDATE_FROM_CART,
    payload,
  };
}

export function ClearCart() { //ver que le pasamos al reducer
  return {
    type: CLEAR_CART,
    //  payload 
  };
}


export function getProducts() {
  return (dispatch) => {
    axios.get('http://localhost:3001/productos/all')
      .then(response => {
        dispatch({
          type: GETCARDS,
          payload: response.data.filter(el => el.id)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};

export function orderProduct({
  offset,
  type,
  order,
  name
}) {
  return (dispatch) => {
    const datos = `offset=${offset}&${type}=type&${order}=order&${name}=name`
    axios.get('http://localhost:3001/admin/productos/order?' + datos)
      .then(response => {
        dispatch({
          type: ORDERPRODUCT,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getNames() {
  return (dispatch) => {
    
    axios.get('http://localhost:3001/admin/productos/names')
      .then(response => {
        dispatch({
          type: GETNAMES,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
//ACTIONS DEL ADMIN

//USUARIOS GET, POST Y PUT y DELETE
export function getAllUsers() {
  return (dispatch) => {
    axios.get("http://localhost:3001/admin/users/all")
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getUserDetails(id) {
  return (dispatch) => {
    axios.get("http://localhost:3001/admin/users/id/" + id)
      .then((response) => {
        dispatch({
          type: GET_USER_DETAILS,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function crearUsuario(payload) {
  return async (dispatch) => {
    
    //const token =jwt.sign({ mail: payload.mail },secret);
    //const user={...payload,token}
   
    const response = await axios.post('http://localhost:3001/clientesPost', payload);
    dispatch({type:POST_USER, payload: response.data})
  }
}

export function postUsuarios(usuario) {
  return (dispatch) => {
    const token =jwt.sign({ mail: usuario.mail },secret);
    const user={...usuario,token}
    axios.post('http://localhost:3001/admin/clientesPost', user)
      .then((response) => {
        alert('El usuario se creó correctamente')
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//EXCLUSIVA PARA ADMIN
export function putUsuariosByadmin(id, usuario,token) {
  return (dispatch) => {
   const user={...usuario,token}
    axios.put("http://localhost:3001/admin/users/" + id, user)
      .then((response) => {
        if (response) alert ('El usuario se modificó correctamente');
        dispatch({
          type: PUT_USER,
          payload: response.data
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }
}
// export function putUsuarios(usuario) {
//   axios.put(`http://localhost:3001/admin/users/${usuario.id}`, usuario)
export function putUsuarios(id, usuario) {
  return (dispatch) => {
    const user = window.localStorage.getItem('user')
    axios.put("http://localhost:3001/users/" + id, usuario)
      .then((response) => {
        dispatch({
          type: PUT_USER,
          payload: response.data
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function deleteUsuarios(id) {
  axios.delete(`http://localhost:3001/admin/client/${id}`)
}

//PRODUCTOS POST, PUT, DELETE Y GET DETAILS
export function addProduct(product) {
  //   return (dispatch) => {
  //     axios.post('http://localhost:3001/admin/productos', product)
  //   }
  // }
  // }
  return (dispatch) => {
    axios.post("http://localhost:3001/admin/productos", product)
      .then((response) => {
        if (response) alert('El producto se creó correctamente');
        dispatch({
          type: ADDNEWPRODUCT,
          payload: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });

  };
}
export function Checkout(payload) {
  return (dispatch) => {
    axios.post("http://localhost:3001/checkout", payload)
      .then((response) => {
        console.log('action gatoo', response)
        // if (response) alert('El producto se creó correctamente');
        return window.location = response.data;
        // dispatch({
        //   type: CHECKOUT,
        //   payload: response.data
        // });
      })
      .catch((err) => {
        console.log('llevame a mercado pago!!!', err);
      });

  };
}
// export async function editProduct(id, payload) {
//   await axios.put('http://localhost:3001/admin/productos/' + id, payload)

export async function editManyProducts(array) {
 array.map(async producto => { 
   try{
     console.log('entra aca')
     await axios.put("http://localhost:3001/admin/productos/" + producto.id, producto.modify)
   } catch (err) {
     console.log(err)
   }
      // .then((response) => {
      //   //if (response) alert('El producto se modificó correctamente');
      // })
      // .catch((err) => {
      //   console.log(err);
      // })
  })
  Promise.all(array)
  .then(function() { alert('Los productos se modificaron correctamente') })
  
}


export async function editProduct(id, payload) {
  // console.log('entra aca')
  await axios.put("http://localhost:3001/admin/productos/" + id, payload)
    .then((response) => {
      if (response) alert('El producto se modificó correctamente');
    })
    .catch((err) => {
      console.log(err);
    });
}
// export async function deleteProduct(id) {
//   await axios.delete(`http://localhost:3001/admin/producto/${id}`)
export async function deleteProduct(id) {
  await axios.delete(`http://localhost:3001/admin/producto/${id}`)
    .then((response) => {
      if (response) alert('El producto se eliminó correctamente');
    })
    .catch((err) => {
      console.log(err);
    });
}

//PEDIDOS
export function getAllPedidos() {
  return (dispatch) => {
    axios.get('http://localhost:3001/admin/pedidos/all')
      .then(response => {
        dispatch({
          type: GETALLPEDIDOS,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};


export function getPedidosByState(state) {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/admin/pedidos/filter?valor=" + state)
        .then(response => {
          dispatch({
            type: GETPEDIDOSBYSTATE,
            payload: response.data
          })
        })

    } catch (err) {
      console.log(err)
    }
  }
};

export function addLocalStorage(payload) {
  return {
    type: ADD_LOCAL_STORAGE,
    payload
  };
};

export function deleteLocalStorage(payload) {
  return {
    type: DELETE_LOCAL_STORAGE,
    payload
  };
}

export function getPedidoDetail(id) {
  return (dispatch) => {
    axios.get('http://localhost:3001/admin/detallePedido/' + id)
      .then(response => {
        dispatch({
          type: GETPEDIDODETAIL,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
// export async function editProduct(id, payload) {
//   await axios.put('http://localhost:3001/admin/productos/' + id, payload)


// export async function deleteProduct(id) {
//   await axios.delete(`http://localhost:3001/admin/producto/${id}`)


//PEDIDOS



export function putPedido(id, payload) {
  return (dispatch) => {
    axios.put(`http://localhost:3001/admin/pedidos/id/${id}`, payload)
      .then(response => {
        if(response) alert('el pedido se modificó correctamente');
        dispatch({
          type: PUTPEDIDO,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};

export function repeatOrder(payload) {
  console.log("payload",payload)
  return {
    type: REPEAT_ORDER,
    payload
  };
}



//ADD TO WISHLIST

export function addToWishList(id,pId) {
  return (dispatch) => {
    axios.post(`http://localhost:3001/favoritos/${id}`, pId)
      .then(response => {
       
        dispatch({
          type: ADD_TO_WISHLIST,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};
export function getFavorites(id) {
  return (dispatch) => {
    axios.get('http://localhost:3001/favorites/'+id)
      .then(response => {
        dispatch({
          type: GETFAVORITES,
          payload: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
};


//REMOVE FROM WISHLIST
export function removeFromWishlist(id,pId) {
  return (dispatch) => {
    console.log(pId,'action...........')
    axios.delete(`http://localhost:3001/favoritos/${id}?product=${pId}`)
    .then(response => {
     
      dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: pId
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
}

export function sendMail(payload){
  console.log('anda',payload)
  return (dispatch)=>{
    axios.post('http://localhost:3001/send-mail', payload)//req.body.mail, req.body.subject, req.body.text
  }
}
