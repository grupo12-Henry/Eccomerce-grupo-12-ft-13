import React from "react";
import { Link } from "react-router-dom";

export default function HomeProductsCards({ name, price, image, id }) {
  return (
    <div className="cardContainer">
      <div className="" key={id}>
        <h4 className="">{name}</h4>
        <p className="">${price}</p>
        <Link to={`/detail/${id}`}>
          <img
            src={image}
            width="100px"
            className=""
            alt="image product"
          />
        </Link><br></br>
        <button type="button" class="btn btn-dark">Agregar</button>
      </div>
    </div>
  );
}


//   return (
//     <StyledDiv>
//       <div>
//         <Nav />
//         <div className="div_container">
//           <div class="container d-flex justify-content-center mt-50 mb-50">
//             <div class="row">
//               {showProducts &&
//                 showProducts.map((el) => (
//                   <div class="col-md-4 mt-2">
//                     <div class="card">
//                       <div class="card-body">
//                         <div class="card-img-actions">
//                           <Link to={`/detail/${el.id}`}>
//                             <img
//                               src={el.image}
//                               class="card-img img-fluid"
//                               height="100"
//                               alt=""
//                             />
//                           </Link>
//                         </div>
//                       </div>
//                       <div class="card-body bg-light text-center">
//                         <div class="mb-2">
//                           <h6 class="font-weight-semibold mb-2">
//                             {" "}
//                             <a
//                               href=""
//                               class="text-default mb-2"
//                               data-abc="true"
//                             >
//                               {el.name}
//                             </a>{" "}
//                           </h6>{" "}
                          
//                         </div>
//                         <h3 class="mb-0 font-weight-semibold">{el.price}</h3>
//                         <div>
//                           {" "}
//                           <i class="fa fa-star star"></i>{" "}
//                           <i class="fa fa-star star"></i>
//                           <i class="fa fa-star star"></i>
//                           <i class="fa fa-star star"></i>
//                         </div>
//                         <div class="text-muted mb-3">34 reviews</div>
//                         <button type="button" class="btn bg-cart">
//                           <i class="fa fa-cart-plus mr-2"></i> Agregar
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </StyledDiv>
//   );
// }

