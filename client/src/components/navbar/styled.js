import styled from 'styled-components';

export const StyledDiv = styled.div`
.header-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-around;
    width: 100%;
	height: 20%;
	overflow: hidden;
	background-color: #FFFFFFF;
	position: absolute;
	top: 0px;
	left: 0px;
	box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.3);
}
.help-menu-izq img{
    margin-right: 3%;
}
.row {
    align-items:center;
    margin-right: 1%;
    list-style: none;
}
.help-menu {
    display:flex;
    align-items: center;
    justify-content:space-around;
}
.help-menu img {
    margin: 10px;
}

.d-flex {
    margin: 1px 1px 1px 1px;
    list-style: none;
}
	 
`;
