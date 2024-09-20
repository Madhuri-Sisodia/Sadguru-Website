import React, { useState } from "react";

const Question = (props) => {
  const [isActive, setActive] = useState(false);

  // Toggle the isActive state between true and false on each click
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div id={props.id}>
      <button onClick={handleClick} className="faq-quest-btn">
        <h4 className={isActive ? "colorfull-text" : ""}>
          {isActive ? "- " : "+ "} {props.question}
        </h4>
        <br />
        {isActive && <div>{props.answer}</div>}
      </button>
    </div>
  );
};

export default Question;
