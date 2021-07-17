import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from "../../actions";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Styled from './styled'



const Auto = () => {
//   function SearchBar({ placeholder}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
    //   console.log(searchWord)
      const newFilter = product.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
        //console.log(newFilter)
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  

  const dispatch = useDispatch();
  const product = useSelector((state) => state.names)
    // console.log(product)

  useEffect(() => {
      const dbProducts = () => {
          dispatch(getNames());
      };
      dbProducts();
  }, [dispatch]);


        return (
          <Styled>
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                placeholder='Busca un producto...'
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <SearchIcon  />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
            {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 5).map((value, key) => {
                  return (
                    <a className="dataItem" href={`/detail/${value.id}`}>
                       
                      <p>{value.name} </p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          </Styled>
        );
};

export default Auto;