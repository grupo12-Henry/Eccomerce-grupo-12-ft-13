import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/index';


export default function Home() {

    const dispatch = useDispatch();
    const product = useSelector(state => state.products)


    const [allProducts, setAllProducts] = useState([])

    const showProducts = allProducts
    console.log(product)

    useEffect(() => {
        const dbProducts = () => { dispatch(getProducts()) }
        dbProducts()
    }, [dispatch])


    useEffect(() => {
        const dbProducts = () => { setAllProducts(product) }
        dbProducts()
    }, [product])

    return (
        <div>
            {showProducts.map(el => <div key={el.id}> (
                <a href='https://localhost:3001/producto/${el.id}'><img src={el.image} alt='image not found'></img></a>
                <p> {el.name}</p>
                <p> {el.price}</p>
                )
            </div>
            )}
        </div>
    )
}

