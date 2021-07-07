import axios from 'axios';
export const GETCARDS = 'GETCARDS';

export function getProducts () {
    return (dispatch) => {
        axios.get('http://localhost:3001/admin/productos')
        .then(response => {
            dispatch({ type: GETCARDS, payload: response.data})
        })
        .catch((err) =>{
            console.log(err)
        })
    }
};







// axios.defaults.baseURL ="http://localhost:3001";