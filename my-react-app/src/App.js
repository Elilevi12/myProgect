import logo from "./logo.svg";
import "./App.css";
import Print from "./tempApp/Printt";
import ListItems from "./tempApp/ListItems";
import Time from "./tempApp/Time"
import MyButton from "./tempApp/myButton";
const titleName = prompt("Please enter a title name!!");
function App() {
  return (
    <div className="App">
      <h1>hello {titleName}</h1>
<ListItems/>
<MyButton/>
<Time/>
<Print name="eli" age={5}/>
    </div>
  );
}

export default App;
