// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../actions/index";
// import StyledDiv from "./styled";
// import HomeCards from './allCards';

// function Bebidas() {
//     const dispatch = useDispatch();
//     const product = useSelector((state) => state.products);

//     const [allProducts, setAllProducts] = useState([]);

//     const [numberPage, setnumberPage] = useState(1);
//     const initialProducts = 4;
//     const conteoFinal = numberPage * initialProducts;
//     const conteoInicial = conteoFinal - initialProducts;

//     const showProducts = allProducts.slice(conteoInicial, conteoFinal)


//     //console.log(product);


//     useEffect(() => {
//         const dbProducts = () => {
//             dispatch(getProducts());
//         };
//         dbProducts();
//     }, [dispatch]);

//     useEffect(() => {
//         const dbProducts = () => {
//             setAllProducts(product);
//         };
//         dbProducts();
//     }, [product]);

//     if (numberPage < 1) setnumberPage(1);
//     if (numberPage > 25) setnumberPage(25);


//     return (
//         <StyledDiv>
//             <div>
//                 <div className="div_container">
//                     <h3></h3>
//                     <div className=''>
//                         <button onClick={() => setnumberPage(numberPage - 1)}> - </button>
//                     </div>
//                     {showProducts && showProducts.map(el => (el.type==='Bebidas')?(
//                         <HomeCards
//                             key={el.id}
//                             id={el.id}
//                             name={el.name}
//                             price={el.price}
//                             image={el.image}
//                         />
//                     ):null)}
//                     <div className=''>
//                     <div className=''>
//                         <button onClick={() => setnumberPage(numberPage + 1)}> + </button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </StyledDiv>
//     );
// }
// export default Bebidas;