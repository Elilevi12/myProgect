import logo from "./logo.svg";

import "./App.css";
import Print from "./Printt";
import ListItems from "./ListItems";
import Time from "./Time"
import MyButton from "./myButton";
function App() {
  return (
    <div className="App">
      <h1>Personal diary..</h1>
<ListItems/>
<Time/>
<MyButton/>
<Print/>
    </div>
  );
}

export default App;
