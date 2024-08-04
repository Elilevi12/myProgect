import { Children } from "react";
import React, { useRef } from "react";
import "./myBook.css";

function Book(props) {
  const textRef = useRef();

  const readMyBook = (e) => {
    textRef.current.innerText = props.sample;
    console.log(props.obg.titel);
  };

  const appLike = (e) => {
    console.log(e);
    props.obg.likes++;
    e.target.nextElementSibling.innerHTML = `like: ${props.obg.likes}`;
    if (props.obg.likes === 100) {
      // e.target.perntElement.className("yes").remov
    }
  };

  return (
    <div className={props.className}>
     <h2>{4*4==15?"yes":"not"}</h2> 
      <h2>title {props.titel}</h2>
      <h2>author {props.author}</h2>
      <h2>Serial {props.sample}</h2>
      <button onClick={readMyBook}>Read</button>
      <p ref={textRef}></p>
      <button onClick={appLike}>👍</button>
      <h3 className="like">like: {props.likes}</h3>
      {props.onshelf ? <button onClick={props.takeBook}>Take</button> : ""}
      {/* {props.children} */}
    </div>
  );
}
export default Book;
