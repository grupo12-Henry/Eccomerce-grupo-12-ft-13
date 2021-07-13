import styled from "styled-components";

const StyledDiv = styled.div`
#container{
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-right: 2%;
    justify-content: space-around;
}

#image{
    height: 55vh;
    margin-bottom: 5%;
}

#name {
    text-align: center
}


#price {
    text-align: center


}
 #home{
    position: static important!;
    margin-top: 10rem important!;
 }

#maker {
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center
}

.card-img img-fluid{
    object-fit: scale-down;
    max-height: 8rem;
}

.img-fluid{
    object-fit: scale-down;
    max-height: 10rem;
}

#description {
    text-align: center
}

`
export default StyledDiv