import "./post.css";

function Post(props) {
  return (
    <div className="post">
      <h4>Hello {props.currentUser}</h4>
      <hr />

      <h3>content: {props.content}</h3>
      <hr />
      <button onClick={props.changeLike}>like</button>

      <p>{props.like ? "👍" : "👎"}</p>

      <h3>{props.theResponder}</h3>
    </div>
  );
}
export default Post;
