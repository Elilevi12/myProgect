import React, { useState } from "react";

// let  = 0;
function MyFunk() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  function addOne() {
    setCounter(counter + 1);
    // console.log(counter);
  }

  function mtText(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div>
      <button onClick={addOne}>Add oue</button>
      <p>{counter}</p>
      <input type="text" onChange={mtText} />
      <p>{text}</p>
    </div>
  );
}
export default MyFunk;
