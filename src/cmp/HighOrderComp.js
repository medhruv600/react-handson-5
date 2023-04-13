import React from "react";
import { useState } from "react";

const HighOrderComp = () => {
  return (
    <div className="hocc">
      <HOC cmp={Counter} />
    </div>
  );
};

const HOC = (props) => {
  return <h4>{<props.cmp />}</h4>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h4>{count}</h4>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
};

export default HighOrderComp;
