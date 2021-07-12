import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/index";
import Nav from '../../navbar/navbar';
import StyledDiv from "../../detail/styled";
import { Link } from 'react-router-dom';

function Vinos() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);
    console.log(product)
   


    const [allProducts, setAllProducts] = useState([]);

    const [numberPage, setnumberPage] = useState(1);
    const initialProducts = 8;
    const conteoFinal = numberPage * initialProducts;
    const conteoInicial = conteoFinal - initialProducts;

    const showProducts = allProducts.filter(el => el.type === 'Vinos').slice(conteoInicial, conteoFinal);

    let subCategories = []
    product.filter(el => el.type === 'Vinos').map(e => e.subcategories.forEach( c => ((subCategories.indexOf(c) === -1) ? subCategories.push(c) : null)))

    console.log(subCategories)


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
    if (numberPage > 8) setnumberPage(8);


    return (
        <>
            <Nav />
                <div className='Filtering'>
                    <button className='DropdownButton'>Filter</button>
                    <div className='Filters'>
                        {subCategories.map(d => <button key={d}
                            onClick={(e) => { e.preventDefault(); setAllProducts(product.filter(el => el.subcategories.includes(d) ) )} }> {d}</button>)}
                    </div>
                </div>
            <StyledDiv>
                <div>
                    <div className="div_container">
                        <div class="container d-flex justify-content-center mt-50 mb-50">
                            <div className=''>
                                <button onClick={() => setnumberPage(numberPage - 1)}>BACK</button>
                            </div>
                            <div class="row">
                                {showProducts &&
                                    showProducts.map(el =>
                                    (
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
                                                                href=""
                                                                class="text-default mb-2"
                                                                data-abc="true"
                                                            >
                                                                {el.name}
                                                            </a>
                                                        </h6>{" "}
                                                    </div>
                                                    <h3 class="mb-0 font-weight-semibold">${el.price}</h3>
                                                    <div>
                                                        {" "}
                                                        <i class="fa fa-star star"></i>{" "}
                                                        <i class="fa fa-star star"></i>
                                                        <i class="fa fa-star star"></i>
                                                        <i class="fa fa-star star"></i>
                                                    </div>
                                                    <div class="text-muted mb-3">34 reviews</div>
                                                    <button type="button" class="btn bg-cart">
                                                        <i class="fa fa-cart-plus mr-2"></i> Agregar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className=''>
                                <button onClick={() => setnumberPage(numberPage + 1)}>FORWARD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledDiv>
        </>
    );
}
export default Vinos;