import React, { Fragment, useState} from 'react';
//import { StyledDiv } from './styled';


export const About = () => {
  const [times, setTimes] =useState(0)
  window.localStorage.getItem("times")
  const setLocal = value => {
    try {
      setTimes(value)
      window.localStorage.setItem("times", value)
    } catch (error) {
      console.error(error)
    }
  }
    
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
          <button onClick = {() => setLocal((times +1))}>Me Gusta</button>
          <span>{times}</span>
        </Fragment>
        
    )
}
export default About