import React, { useState } from "react";
import "./Question.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [hiddenInfo, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hiddenInfo);
  };

  return (
    <div className="questions">
      <h2>{title}</h2>
      <button onClick={() => toggleHidden()}>Plus</button>
      {hiddenInfo ? <p>{info}</p> : ""}
    </div>
  );
};

export default Question;
