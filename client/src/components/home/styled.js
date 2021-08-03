import styled from 'styled-components';


const StyledDiv = styled.div`
display: flex;

.mt-50 {
    margin-top: 50px;
    margin-bottom: 50px;
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
    margin: 6%;
    margin-bottom: 0;
    margin-top: 7%;
    height: 90%;
    width: 100%;
    align-items: center;
    position: relative;
}

.div_cards{
    position: relative;
    display: block;
    width: 20%;
    height: 58%;
    text-align: center;
    background-color: rgba(240, 240, 240, 0.8);
    border-radius: 1rem;
    margin: 1rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    color: rgb(70, 70, 70);
    box-shadow: 0.2rem 0.2rem 1rem rgba(20, 20, 20, 0.8);
}

.img_products{
    height: 200px;
    width: 200px;
}

.loadingCSS {
    margin: 250px;
}

.Agregar{
    color: #ffffff;
 border-radius:5px;
 background-color: #313131;
 padding-left:0.5rem;
 padding-right:0.5rem;
}

h6, .h6{
    height: 50px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.cardImg{
    object-fit:scale-down;
    height: 150px;
}
`
export default StyledDiv