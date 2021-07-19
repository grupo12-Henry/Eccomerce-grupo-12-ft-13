import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/index";
import Nav from '../../navbar/navbar';
import StyledDiv from "../../detail/styled";
import { Link } from 'react-router-dom';
import NavCategories from "../../navCategories/navCategories";
import Footer from '../../footer/footer'

function Bebidas() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);
    console.log(product)
    /*
    
  <div className='Filtering'>
          <button className='DropdownButton'>Filter</button>
          <div className='Filters'>
          <button onClick={(e) => { e.preventDefault(); props.filter('');}}>Clean Filters</button>
          {categoriesWhines.map(d => <button key={d}
            onClick={(e) => {e.preventDefault(); allProducts.filter(d=>{d.name.includes(e)})}}>{d}</button>)}
        </div>
      </div>


    
    */

    const [allProducts, setAllProducts] = useState([]);

    const [numberPage, setnumberPage] = useState(1);
    const initialProducts = 9;
    const conteoFinal = numberPage * initialProducts;
    const conteoInicial = conteoFinal - initialProducts;

    let showProducts = allProducts.filter(el => el.type === 'Bebidas').slice(conteoInicial, conteoFinal);


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

    if (numberPage < 1) setnumberPage(1);
    if (numberPage > 25) setnumberPage(25);

    


    return (
        <>
         <Nav />
            <NavCategories />
            <StyledDiv>
                <div>
                    <div className="div_container">
                        <div class="container d-flex justify-content-center mt-50 mb-50 mw-100">
                            <div className=''>
                                <button onClick={() => setnumberPage(numberPage - 1)}>BACK</button>
                            </div>
                            <div class="row">
                                {console.log(1)}
                                {showProducts &&
                                    showProducts.map(el =>
                                        {return el.stock>0?<>
                                        <div class="col-md-4 mt-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="card-img-actions">
                                                        <Link to={`/detail/${el.id}`}>
                                                            <img
                                                                src={el.image}
                                                                class="card-img img-fluid"
                                                                height="100"
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div class="card-body bg-light text-center">
                                                    <div class="mb-2">
                                                        <h6 class="font-weight-semibold mb-2">
                                                            <a
                                                                href={`/detail/${el.id}`}
                                                                class="text-default mb-2"
                                                                data-abc="true"
                                                            >
                                                                {el.name}
                                                            </a>
                                                        </h6>{" "}
                                                    </div>
                                                    <h3 class="mb-0 font-weight-semibold">{el.price}</h3>
                                                    <div class="text-muted mb-3">34 reviews</div>
                                                    <button type="button" class="btn bg-cart">
                                                        <i class="fa fa-cart-plus mr-2"></i> Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        </>: null})}
                            </div>
                            <div className=''>
                                <button onClick={() => setnumberPage(numberPage + 1)}>FORWARD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledDiv>
            <Footer />
        </>
    );
}
export default Bebidas;