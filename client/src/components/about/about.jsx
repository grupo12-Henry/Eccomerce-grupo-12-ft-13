import React, { Fragment, useState} from 'react';
import { useLocalStorage } from '../shoppingCart/useLocalStorage';
import { StyledDiv } from './styled';


export const About = () => {
  //const [times, setTimes] =useLocalStorage('times', 0)
  const [text, setText] = useState(
    window.localStorage.getItem("text")
   )
  
  const setLocalStorage = value => {
    try {
      setText(value)
      window.localStorage.setItem("text", value)
  } catch (error) {
      console.error(error)
  }
}


return(
    
        <Fragment>
          <textarea
          onChange = {e => setLocalStorage(e.target.value)}
          value = {text}
          />
          {/* <button onClick = {() => setTimes(times + 1)}>Me Gusta</button>
          <span>{times}</span> */}
        </Fragment>
        
    )
}
export default About