import { useState } from "react";
import { Link } from "react-router-dom";

function HiChews() {

  const [boughtCount, setBoughtCount] = useState(0);

  function handleClick() {
    setBoughtCount(prev => prev+1);
  }

  return (
    <>
      <h1>Here's a Hi-Chew.</h1>
      <p>You bought {boughtCount}</p>
      <button onClick={handleClick}>Buy</button>
      <br/>
      <Link to="/">Go back</Link>
    </>
  );
}

export default HiChews;
