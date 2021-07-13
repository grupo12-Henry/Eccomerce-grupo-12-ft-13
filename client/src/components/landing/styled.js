import styled from 'styled-components';
import image from '../../assets/images/landing2.jpg';

export const StyledDiv = styled.div`

.div_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100vh;
    background-image: url(${image});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    overflow: hidden
}

.div_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:50px;
    margin-bottom: 60px
		
   
}
.btn { 
background-color: black;
border-radius: 5px;
color: white;

}
.carousel  {
    
    margin-left: 1px;
    
}
	 
`;