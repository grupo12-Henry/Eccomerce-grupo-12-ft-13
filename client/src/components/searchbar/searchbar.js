
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNames } from "../../actions";
import "./search.css";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState("");
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);



  const dispatch = useDispatch();
  const product = useSelector((state) => state.names)
    // console.log(product)

  useEffect(() => {
      const dbProducts = () => {
          dispatch(getNames());
      };
      dbProducts();
  }, [dispatch]);

//   useEffect(() => {
//       const dbProducts = () => {
//           setAllProducts(product);
//       };
//       dbProducts();
//   }, [product]);




  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateProducts = product => {
    setSearch(product);
    setDisplay(false);
  };

  function handleChange(e) {
      e.preventDefault()	
      setOptions({
          name: e.target.value
      })
      
          function handleSubmit(e) {
              e.preventDefault()
              if (input.name) {
                  getName(input.name)
              } else if (!input.name){
                  alert('❌ Enter a name of a country')
              } 
              setInput({name:''})
          }
  };
  /*

	return (
		<div >
			<form onSubmit={(e) => handleSubmit(e)}>
				<input className={style.input} type='text' placeholder='Search Country...' name='name'	value={input.name}	onChange={(e) => handleChange(e)}/>
				
                </form>
                </div>
            )
        }
        
        function mapDispatchToProps(dispatch) {
            return {
                searchCountry: name => dispatch(searchCountry(name))
            };
        }
        
        export default connect(null, mapDispatchToProps)(SearchBar)



  */
  

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <form onSubmit={(e) => handleSubmit(e)}>
         <input
            id="input"
            name='name'
            type='text'
            onClick={() => setDisplay(!display)}
            placeholder="search product..."
            value={search}//value={input.name}
            onChange={event => setSearch(event.target.value)}
        />

        </form>
      {display && (
        <div className="autoContainer">
          {product
            .filter(({ name }) => name.toLowerCase().includes(search.toLocaleLowerCase()))
            .map((value, i) => {
              return (
                <div
                  className="option"
                  onClick={() => updateProducts(value.name)}
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  {/* <img src={value.image} alt="GETNAMES" /> */}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <h1>Custom AutoComplete React</h1>
//       <div className="logo"></div>
//       <div className="auto-container">
//         <Auto />
//       </div>
//     </div>
//   );
// }

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
