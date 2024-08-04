import Post from "./post/Post";
import React, { useState } from "react";

const arrPost = [
  { like: true, content: "a", currentUser: "eli", theResponder: "avi" },
  { like: false, content: "b", currentUser: "eli", theResponder: "gad" },
  { like: true, content: "c", currentUser: "eli", theResponder: "dan" },
  { like: false, content: "d", currentUser: "eli", theResponder: "ron" },
];

function AppPost() {
  const [like, setLike] = useState(true);

  function changeLike(event) {

    setLike (!like);
  
    
  }


  return (
    <div className="main">
      <button onClick={changeLike}>send</button>
      {arrPost.map((p) => {
        return (
          <Post
            content={p.content}
            like={like}
            theResponder={p.theResponder}
            currentUser={p.currentUser}
          />
        );
      })}

      {/* <Post content="aaaaaaaaaa" theResponder="avi" like={false} /> */}
    </div>
  );
}
export default AppPost;

// "like content theResponder"
