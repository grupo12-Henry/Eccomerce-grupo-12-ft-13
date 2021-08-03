import styled from "styled-components";

const StyledDiv = styled.div`


@media (max-width: 768px) {
    .centrado {
      margin-left:10%;
      
    }

    #product {
        height: 30vh !important
    }

    #name {
        font-size: 180%
    }

    #maker {
        font-size: 120%
    }

    .row {
        margin: 0 !important
    }

  }
  

.card{
    height:100%;
}

#name {
    text-align: center
}


#price {
    text-align: center;
    margin-bottom: 3%

}
 #home{
    position: static important!;
    margin-top: 10rem important!;
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
.row{
    justify-content:space-around;
}
`
export default StyledDiv