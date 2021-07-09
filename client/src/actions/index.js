import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS'
export const GETNAMES = 'GETNAMES'
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
            console.log('DATA',response.data)
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





// axios.defaults.baseURL ="http://localhost:3001";