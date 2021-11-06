import React, { useState } from "react";
import "./Question.css";
import { FaMinusCircle, FaPlus, FaMinus } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [hiddenInfo, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hiddenInfo);
  };

  return (
    <div className="questions-container">
      <div className='questions'>
        <h2>{title}</h2>
        <button onClick={() => toggleHidden()}>
          {hiddenInfo ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {hiddenInfo ? <p>{info}</p> : ""}
    </div>
  );
};

export default Question;
