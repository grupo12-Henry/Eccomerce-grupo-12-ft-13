import styled from 'styled-components';


const StyledDiv = styled.div`
display: flex;


.promo{
    
    height: auto !important;
    width:  auto !important;
    display: inline;
    margin-top: 156px;
}

.div_container{
    display: flex;
    margin-top: 150px;
    height: 100%;
    width: 100%;
    border: solid 3px;
    align-items: center;
    border: solid 4px;
}

.div_cards{
    border: solid blue 7px;
    position: relative;
    display: block;
    width: 20%;
    height: 58%;
    text-align: center;
    background-color: rgba(240, 240, 240, 0.8);
    border-radius: 1rem;
    margin: 2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    color: rgb(70, 70, 70);
    box-shadow: 0.2rem 0.2rem 1rem rgba(20, 20, 20, 0.8);
}

.img_products{
    height: 200px;
    width: 200px;
}

`
export default StyledDiv