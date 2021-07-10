import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/index";
import StyledDiv from "./styled";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";
import HomeProductsCards from '../homeProductsCards/homeProducts';
// import SignUp from '../signUp/SignUp';
import Pages from "./paginado";
// import Order from "../order/order";


export default function Home({location}) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);

    const [allProducts, setAllProducts] = useState([]);
    const showProducts = allProducts
    const [page, setPage] = useState(1);

    useEffect(() => {
      if (location.search !== '') {
          setPage(parseInt(location.search.slice(location.search.indexOf('=') + 1)));
        }
    }, [location.search])
  
    
        useEffect(() => {
            const dbProducts = () => {
                dispatch(getProducts());
            };
            dbProducts();
        }, [dispatch]);
    
        useEffect(() => {
            const dbProducts = () => {
                setAllProducts(product);
            };
            dbProducts();
        }, [product]);
  
  



    // if (numberPage < 1) setnumberPage(1);
    // if (numberPage > 25) setnumberPage(25);


    return (
        <StyledDiv>

                {/* <Order id='order'/> */}
            <div>        

                    {allProducts.length > 0 ? allProducts.slice((page - 1) * 9, page * 9).map(el => <div key={el.id}>
                <Nav />
                <div className="div_container">
                        <HomeProductsCards
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        price={el.price}
                        image={el.image}
                        />
                    <div className=''>
                </div>
                </div>
                        </div>):null}
                    <Pages allProducts={product} page={page} />
            </div>
            <Footer />
            </StyledDiv>
    );
}