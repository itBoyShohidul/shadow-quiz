import { useState } from "react";
import data from "./json/computer.json";
import quizImage from "./image/quiz.png";

function App() {
  const [count, setCount] = useState(0);
  const [rightAnser, setRightAnser] = useState(1);
  const [point, setPoint] = useState(0);
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);
  const [selected4, setSelected4] = useState(null);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);
  const [disable4, setDisable4] = useState(false);

  const prevFunction = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
      setDisable1(true);
      setDisable2(true);
      setDisable3(true);
      setDisable4(true);
    }
    setSelected4(null);
    setSelected2(null);
    setSelected3(null);
    setSelected(null);
  };
  const nextFunction = () => {
    if (count === data.results.length - 1) {
      setCount(data.results.length - 1);
    } else {
      setCount((prev) => prev + 1);
    }
    setRightAnser(data.results[count + 1].correct_answer);
    setSelected4(null);
    setSelected2(null);
    setSelected3(null);
    setSelected(null);
    setDisable1(false);
    setDisable2(false);
    setDisable3(false);
    setDisable4(false);
  };
  const buttonHandler1 = () => {
    setSelected({
      backgroundColor: "green",
    });
    setSelected2(null);
    setSelected3(null);
    setSelected4(null);
    if (rightAnser === 0) {
      setPoint((prev) => prev + 5);
    }
    setDisable1(true);
    setDisable2(true);
    setDisable3(true);
    setDisable4(true);
  };
  const buttonHandler2 = () => {
    setSelected2({
      backgroundColor: "green",
    });
    setSelected(null);
    setSelected3(null);
    setSelected4(null);
    if (rightAnser === 1) {
      setPoint((prev) => prev + 5);
    }
    setDisable1(true);
    setDisable2(true);
    setDisable3(true);
    setDisable4(true);
  };
  const buttonHandler3 = () => {
    setSelected3({
      backgroundColor: "green",
    });
    setSelected2(null);
    setSelected(null);
    setSelected4(null);
    if (rightAnser === 2) {
      setPoint((prev) => prev + 5);
    }
    setDisable1(true);
    setDisable2(true);
    setDisable3(true);
    setDisable4(true);
  };
  const buttonHandler4 = () => {
    setSelected4({
      backgroundColor: "green",
    });
    setSelected2(null);
    setSelected3(null);
    setSelected(null);
    if (rightAnser === 3) {
      setPoint((prev) => prev + 5);
    }
    setDisable1(true);
    setDisable2(true);
    setDisable3(true);
    setDisable4(true);
  };
  return (
    <div className="box">
      <div className="left">
        <h1>
          Question {count + 1} of {data.results.length}
        </h1>
        <h3>
          Right Answer {rightAnser} and Score {point}{" "}
        </h3>
        <h2 className="question">{data.results[count].question}</h2>

        <button
          disabled={disable1}
          className="option-button"
          style={selected}
          onClick={buttonHandler1}
        >
          {data.results[count].options[0]}
        </button>

        <button
          disabled={disable2}
          className="option-button"
          style={selected2}
          onClick={buttonHandler2}
        >
          {data.results[count].options[1]}
        </button>

        <button
          disabled={disable3}
          className="option-button"
          style={selected3}
          onClick={buttonHandler3}
        >
          {data.results[count].options[2]}
        </button>

        <button
          disabled={disable4}
          className="option-button"
          style={selected4}
          onClick={buttonHandler4}
        >
          {data.results[count].options[3]}
        </button>
      </div>

      <div className="right">
        <div>
          <img src={quizImage} className="image" alt="" />
        </div>

        <button className="prev" onClick={prevFunction}>
          Previous
        </button>
        <button className="next" onClick={nextFunction}>
          {count + 1 === data.results.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
