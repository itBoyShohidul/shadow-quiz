import React from "react";
import { Link, useParams } from "react-router-dom";

function Result() {
  const { point } = useParams();
  return (
    <div>
      <div className="result-box">
        <h1>
          {point > 50 ? "Congratulation !" : "Sorry !"} <br />
          Your Score is : {point} <br />
          Out of 100.
        </h1>
        <Link to="/">
          <button className="next">Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
