import React from 'react';
import { StyledDiv } from './styled';


export const About = () => {
    return(
      <StyledDiv>
        <div className='div_container'>
          <div className='title'>
          <h2 >About this Page:</h2>
          <p>
          “Labor y perseverancia” fue el lema que guió a Felipe Rutini desde el
            comienzo y que marcó a fuego el devenir de sus vinos hasta convertirlos
            en sinónimo de la más alta calidad. Siguiendo su espíritu innovador,
            hacia 1925 la bodega comienza a plantar viñedos en el Valle de Uco.
            A partir de esas plantaciones pioneras la región se ha ido consolidando
            como uno de los principales centros vitivinícolas de Mendoza.
            Durante la década del 90 las instalaciones originales de La Rural en Coquimbito
            son renovadas completamente, incorporando tecnología de punta a la estructura que
            funcionaba desde el siglo XIX. En ese mismo predio se encuentra hoy en día el
            Museo del Vino, donde los visitantes pueden conocer los primeros pasos de don
            Felipe Rutini en la producción de vinos y ver la evolución de las técnicas
            y de los mecanismos de trabajo tradicionales.
          </p>
          </div>
        </div>
        </StyledDiv>
    )
}
export default About