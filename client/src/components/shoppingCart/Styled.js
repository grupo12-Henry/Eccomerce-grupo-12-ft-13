import styled from 'styled-components';


const StyledDiv = styled.div`
.container-productos{
  border
  position: relative;
  display: block;
  width: 45.5rem;
  height: 27rem;
  text-align: center;
  border-radius: 1rem;
  margin: 2rem;
  border: 0.1rem solid rgba(94, 3, 3, 0.726);
  color: rgba(114, 224, 160, 0.699);;
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3),0px 3px 7px rgba(0, 0, 0, 0.3),0px 1px white inset, 0px -3px 2px rgba(0, 0, 0, 0.3) inset ;
}

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