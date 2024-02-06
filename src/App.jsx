import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { plusButton, minusButton } from "./redux/modules/action";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const InputResult = useSelector((state) => state.calculator.result);

  const plusBtn = () => {
    dispatch(plusButton(parseInt(number)));
    setNumber("");
  };
  const minusBtn = () => {
    dispatch(minusButton(parseInt(number)));
    setNumber("");
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={(e) => setNumber(e.target.value)} />{" "}
        만큼을 <button onClick={plusBtn}>더할게요</button>{" "}
        <button onClick={minusBtn}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{InputResult}</p>
      </div>
    </div>
  );
}

export default App;
