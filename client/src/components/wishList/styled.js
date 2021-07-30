import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;

.highlight {
   color: red
    :hover{
        color: black
    }
}



.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .1875rem
}

.card-img-actions {
    position: relative
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    text-align: center
}

.card-img {
    object-fit: scale-down;
    max-height:11rem;
}

.star {
    color: red
}

.bg-cart {
    background-color: orange;
    color: #fff
}

.bg-cart:hover {
    color: #fff
}

.bg-buy {
    background-color: green;
    color: #fff;
    padding-right: 29px
}

.bg-buy:hover {
    color: #fff
}

a {
    text-decoration: none !important
}

.div_container{
  display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.div_cards{
}

.contenedorDeFav{
  position: relative;
  display: block;
  width: 20em;
  height: 25rem;
  text-align: center;
  background-color: rgba(240, 240, 240, 0.8);
  margin: 1rem;
  color: rgb(70, 70, 70);
  
}

.card-img{
  margin-top: 0.5rem;
}

.loadingCSS {
    margin: 250px;
}

`;
export default StyledDiv;
