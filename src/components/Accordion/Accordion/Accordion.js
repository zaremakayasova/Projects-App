import React from "react";
import "./Accordion.css";
import data from "../data";
import Question from "../Question/Question";

const Accordion = () => {
  return (
    <div className="accordion-container">
      <div className="accordion">
        <h1>Questions and Answers About Login</h1>
        <div className='accordion-questions'>
          {data.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
