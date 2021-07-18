import styled from "styled-components";

export const StyledDiv = styled.div`
.header-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    width: 100%;
	height: 20%;
    margin-bottom: 2%;
	overflow: hidden;
	background-color: #ffff;
	top: 0px;
	left: 0px;
	box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.3);
}
.help-menu-izq img{
    margin-right: 3%;
}
.row {
    align-items:center;
    justify-content:space-around !important;
    margin-right: 1%;
    margin-top: 2%;
    list-style: none;
}
.help-menu {
    display: ruby;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
    margin-bottom: 2%;

    a{
        margin-right:50%;
    }
}
.help-menu img {
    margin: 10px;
}

.d-flex {
    margin: 1px 1px 1px 1px;
    list-style: none;
}

.dropdown {
    position: absolute;
    right: 5%;
}
.sidebar-social li {
    
    text-align: center;
    width: 32%;
    margin-bottom: 3px ;
    display: inline-block;
    font-size: 10px;
    padding: 0;
  }

.sidebar-social i {
    display: block;
    margin: 0 auto 10px auto;
    width: 32px;
    height: 32px;
    margin: 10px auto 0;
    line-height: 32px;
    text-align: center;
    font-size: 20px;
    color: #444444;
    margin-top: 0;
    padding-top: 5px;
  }
  .sidebar-social a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    padding: 0;
  }
  .sidebar-social a span {
        color: black;
        font-size: 15px;
        padding: 5px 0 10px 0;
        display: block;
        text-transform: uppercase;
        font-family: 'Montserrat';
        letter-spacing: 1px;
  }  

  #cart_menu_num {
    top: 0;
    margin-left: 58%;
    background: #D83A56;
    width: 15px;
    height: 15px;
    border-radius: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 1px;
  }
  
`;

//   .cart {
//     position: relative;
//   }
