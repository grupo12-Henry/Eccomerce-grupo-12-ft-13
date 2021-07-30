import styled from "styled-components";

const StyledDiv = styled.div`
.btn btn-danger{
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}

.div_button{
    margin-bottom: 2rem;
}

.logo-google{
    width: 20px;
    margin-bottom: 0.2rem;
}
.bClose{
    border:2px solid white;
    cursor: pointer;
}

.bLogout{
    border-radius:5px
    height: 2.2rem;
    margin-bottom: -20px;
    width: 7rem;
    align-self: center;
    height: 1.9rem;
    align-items: center;
    align-content: center;
    font-size: revert;
}

.icon{
    &hover{
        color: #ebc28e;
        cursor:pointer;
    }
}

`
export default StyledDiv