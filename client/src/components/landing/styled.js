import styled from 'styled-components';
import image from '../../assets/images/landing.jpg';

export const StyledDiv = styled.div`
display: flex;
justify-content: center;
width: auto;
height: 100vh;
background-image: url(${image});
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
overflow: hidden

.div_content {
    display: flex;
    align-items: flex-end
}

.div_btn {
    display: flex;
    align-items: flex-end;
    margin-bottom: 120px
		
   
}
.btn { 
background-color: black;
border-radius: 5px;
color: white;

}

@media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
	 
`;
