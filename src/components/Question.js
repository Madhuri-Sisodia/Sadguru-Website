import React,{useState} from "react";
const Question = props => {
    const [isActive, setActive] = useState(false);
    
    const handleClick = (id) => {
     setActive(true)
   }
     return(
       <div >
       <div id={props.id}>
         <h4 className="h4">{props.question}</h4>
         <button onClick={() => handleClick(props.id)}>

        {isActive ?  <svg viewBox="0 0 320 512" width="5" title="angle-down">
         <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
      </svg> : ""}
         </button> 

       </div>
      {isActive ?<div>{props.answer}</div> : ""}
       </div>
     )
     }
   export default Question;