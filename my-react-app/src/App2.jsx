import Book from "./book/Book";
const arrBooks = [
  { titel: "a", author: "a", likes: 0, onshelf: true, sample: "abcdefghijk" },
  { titel: "b", author: "b", likes: 1, onshelf: false, sample: "123456789" },
  { titel: "c", author: "c", likes: 150, onshelf: true, sample: "lmnop" },
];

function App2() {
  return (
    <div>
      {/* {console.log(b.Serial);} */}
      <h1>book store</h1>
      {arrBooks.map((b, i) => {
        function takeBook() {
          console.log(b.onshelf);
          b.onshelf = false;
        //  b.id="notOnshelf"
          console.log(b.onshelf);
        }
        return (
          <Book
            titel={b.titel}
            author={b.author}
            Serial={i}
            likes={b.likes}
            sample={b.sample}
            obg={b}
            takeBook={takeBook}
            onshelf={b.onshelf}
            className={`${b.likes > 100 ? "yes" : "not"} ${
              b.onshelf ? "onshelf" : "notOnshelf "
            }`}
          >
            <h5 style={{ backgroundColor: "brown", border: "5px solid black" }}>
              Book
            </h5>
            <p>dfsdfd</p>
          </Book>
        );
      })}
    </div>
  );
}
export default App2;
