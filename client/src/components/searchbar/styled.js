import styled from 'styled-components';

const Styled = styled.div`

.search{
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-right: 20% ;

}

.search input {
  width: auto;
  height: 35px;
  border-radius: 2px;
  padding: 5%;
  font-family: 'Quicksand', sans-serif;
  outline: none;
  background-color: #232323;
  border: 0;
  margin-left: 0;
  }
  
  .searchIcon {
    place-items: center;
    margin-top: -29px;
    height: 28px;
    width:40px;
    margin-left: 75%
  }
  
  input:focus {
    outline: none;
  }
  .searchIcon svg {
    font-size: 25px;
  }
  
  .dataResult {
    font-size: 80%;
    position:absolute !important;
    margin-top: 2px;
    width: auto;
    height: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    overflow: hidden;
    overflow-y: auto;
  }
  .dataItem {
    height: 18% !important;
  }
  
  .dataResult::-webkit-scrollbar {
    display: none;
  }
  
  .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    margin: 0;
    align-items: center;
    color: black;
  }
  
  .dataItem p {
    margin-left: 5px;
  }
  a {
    text-decoration: none;
  }
  
  .dataResult a:hover {
    background-color: rgba(207, 154, 154, 0.507);
  }
  
  #clearBtn {
    cursor: pointer;
  }

`
export default Styled