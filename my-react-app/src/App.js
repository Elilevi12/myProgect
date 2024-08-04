import logo from "./logo.svg";
import "./App.css";
import Print from "./tempApp/Printt";
import ListItems from "./tempApp/ListItems";
import Time from "./tempApp/Time";
import MyButton from "./tempApp/myButton";
import MyFunk from "./dvir/MyFunk";
import AppPost from "./AppPost";
// const titleName = prompt("Please enter a title name!!");
function App() {
  return (
    <div className="App">
      <AppPost />
      {/* <h1>hello {titleName}</h1> */}
      {/* <MyFunk /> */}
      {/* <ListItems/>
<MyButton/>
<Time/>
<Print name="eli" age={5}/> */}
    </div>
  );
}

export default App;
