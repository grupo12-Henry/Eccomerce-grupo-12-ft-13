import React, { useState, useDispatch, useSelector } from "react";
import Nav from "../../../navbar/navbar";
import Footer from "../../../footer/footer";
import { getpedidosUser } from "../../../../actions/index";


export default function misPedidos() {
/*   const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidosUser);

  const [detallePedidos, setdetallePedidos] = useState([]);

  useEffect(() => {
      dispatch(getpedidosUser(match.params.id))
      }, [getpedidosUser, match.params.id]);

  
  useEffect(() => {
      setdetallePedidos(pedidos)
      }, [pedidos]);
 */

  return (
    <>
      <Nav />
      ACA TUS PEDIDOS REY
      <Footer />
    </>
  );
}
