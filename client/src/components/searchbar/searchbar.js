import {Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from "../../actions";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

// import "./search.css";

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
        console.log(newFilter)
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
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                placeholder='busca un producto'
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
            {filteredData.length !== 0 && (
              <div className="dataResult">
                {filteredData.slice(0, 5).map((value, key) => {
                  return (
                    <a className="dataItem" href = {`/detail/${value.id}`}>
                       
                      <p>{value.name} </p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
};

export default Auto;




















































// import React from 'react';
// // import axios from 'axios'
// // import react from 'react';
// // import { useEffect } from 'react'; 

// export default class AutoCompleteText extends React.Component{
//     constructor (props){
//         super(props)
//         this.items= [{name: 'coca'}, {name: 'sprite'}, {name: 'cosa'}];
//         this.state={
//             suggestions:[],
//             text: this.value,
//         }
//     }


//     // suggestionSelected(value) {
//     //     this.setState(()=> ({
//     //         text: value,
//     //         suggestions: []
//     //     }))
//     // }
    
//     onTextChanged=(e)=>{
//         const value = e.target.value;
//         let suggestions = [];
//         if(value.length){
//             // const regex = new RegExp(`^${value}`, 'i');
//             suggestions = this.items.filter(v=> v.name.includes(value));
//             // console.log('onText' ,this.state)
//         }
//         this.setState(()=> ({suggestions}))
//     };
    
//     renderSuggestions (){
//         console.log(this.state)
//         const {suggestions} = this.state;
//         console.log(suggestions)
//         if(suggestions.length === 0 ) {
//             return null;
//         }
//         return <ul>
//                 {suggestions.Map( (item) => <li >{item.name}</li>)}            
//                 </ul>
//     }
//     //onClick={ () => this.suggestionSelected(item)}



//     render(){
//         const {text} = this.state;
//         return (
//             <div>
//                 <input value={text} onChange={ this.onTextChanged} type="text"/>
//                 {this.renderSuggestions}{console.log(this.state)}
//             </div>
//         )
//     }
// }

// // const mapStateToProps = (state) => {
// //     return {
// //         names: state.names
// //     }
// // }
