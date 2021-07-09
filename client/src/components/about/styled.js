import styled from 'styled-components';
import image from '../../assets/images/landing2.jpg';


export const StyledDiv = styled.div`
.div_container {
    display: flex;
    width: auto;
    background-size: cover;
    background-image: url(${image});
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    align-items:center;
    justify-content:center;
}
.title{
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    width: 50%;
    height: 150px;
    padding: 10px;
    backdrop-filter: blur(4px);
    border: rgba(255, 255, 255, 0.63) 2px solid;
    border-radius: 3%;

}

.style_p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    width: 50%;
    height: 150px;
    padding: 10px;
    backdrop-filter: blur(4px);
    border: rgba(255, 255, 255, 0.63) 2px solid;
    border-radius: 3%;
}

`