import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from "../../actions";
import {AiOutlineSearch} from 'react-icons/ai';
import CloseIcon from "@material-ui/icons/Close";
import Styled from './styled'

const Auto = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.names)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = product.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

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
            placeholder='Search...'
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 5).map((value, key) => {
              return (
                <a className="dataItem" href={`/home/detail/${value.id}`}>
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