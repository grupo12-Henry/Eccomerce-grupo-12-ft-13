import styled from 'styled-components';

export const StyledDiv = styled.div`
.header-container{
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
	height: 14%;
	overflow: hidden;
	background-color: #FFFFFFF;
	position: absolute;
	top: 0px;
	left: 0px;
	box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.3);
}
.help-menu {
    align-items: center;
    justify-content:space-around;
}
.help-menu img {
    margin-right: 5%;
}
.help-menu img:hover {
   bacground-color:red;
    margin-right: 5%;
}
.row {
    margin-right: 1%;
    list-style: none;
}
.d-flex {
    list-style: none;
}
.Auto{
    position: fixed;
}
.d-flex input {
    
    margin-left: 70%;
    border-radius: 50px;
    padding: 2%;
    outline: none;
    background-color: rgba(238, 238, 238, 0.932);
    border: 0;
}
.d-flex li {
    margin-left: 6%;
}

	 
`;
