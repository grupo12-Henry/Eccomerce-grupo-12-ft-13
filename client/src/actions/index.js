import axios from 'axios';
export const GETCARDS = 'GETCARDS';
export const GETDETAILS = 'GETDETAILS'

export function getProducts () {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos')
        .then(response => {
            dispatch({ type: GETCARDS, payload: response.data.filter(el => el.id < 10)})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};

export function getDetail (id) {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos/' + id)
        .then(response => {
            dispatch({ type: GETDETAILS, payload: response.data})
            console.log('DATA',response.data)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};





// axios.defaults.baseURL ="http://localhost:3001";