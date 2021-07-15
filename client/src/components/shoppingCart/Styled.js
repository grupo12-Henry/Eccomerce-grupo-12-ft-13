import styled from 'styled-components';


const StyledDiv = styled.div`
.container-carrito{
  display:flex;
  flex-direction:row;
  
}
.Img{
  justify-content:space-around;
  object-fit: scale-down;
  max-height: 4rem;
}

.button{
  height: 2rem;
  color: red;
  margin-left:1rem;
  font-size: 12px;
}

.counter{
  height: 2rem;
  width:2.5rem;
}

`
export default StyledDiv;