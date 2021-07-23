import styled from 'styled-components';


const StyledDiv = styled.div`
.container-productosSSStyled{
  border
  position: relative;
  display: block;
  width: 200rem;
  height: 27rem;
  text-align: center;
  border-radius: 1rem;
  margin: 2rem;
  border: 0.1rem solid rgba(94, 3, 3, 0.726);
  color: rgba(94, 3, 3, 0.726);
  background: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3),3px 3px 7px rgba(0, 0, 0, 0.3),3px 1px white inset, 0px -2px 2px rgba(3, 3, 3, 0.3) inset;
  margin-left:80%;
}

.container-carrito{
  display:flex;
  flex-direction:row;
  font-size:0.01rem
  width:100rem
}

h6, .h6 {
    font-size: 0.6rem;
    margin-left:0.2rem;
     color: rgba(94, 3, 3, 0.726);
}
.Img{
  justify-content:space-around;
  object-fit: scale-down;
  max-height: 2rem;
}

.button{
  height: 1rem;
  color: red;
  font-size: 0.5rem;
}

.counter{
  height: 1rem;
  width:0.7rem;
}

`

/*.Recipe{
  position: relative;
  display: block;
  width: 20.5rem;
  height: 27rem;
  text-align: center;
  border-radius: 1rem;
  margin: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.4);
  color: rgba(114, 224, 160, 0.699);;
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3),0px 3px 7px rgba(0, 0, 0, 0.3),0px 1px white inset, 0px -3px 2px rgba(0, 0, 0, 0.3) inset ;
}* */
export default StyledDiv;