import { Children } from "react";
import React, { useRef } from "react";
import "./myBook.css";

function Book(props) {

  const textRef = useRef();
  
  const readMyBook = (e) => {
    textRef.current.innerText = props.sample;
    console.log(props.obg.titel);
  };

  const appLike=(e)=>{
     console.log(props.obg.likes)
    props.obg.likes++;
   
  }

  return (
    <div className={props.className}>
      <h2>title {props.titel}</h2>
      <h2>author {props.author}</h2>
      <h2>Serial {props.sample}</h2>
      <button onClick={readMyBook}>Read</button>
      <p ref={textRef}></p>
<button onClick={appLike}>Like </button>
{props.onshelf?<button onClick={props.takeBook}>Take</button>:""}
      {/* {props.children} */}
    </div>
  );
}
export default Book;
