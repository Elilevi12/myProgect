import logo from "./logo.svg";

import "./App.css";
import ListItems from "./ListItems";
import Time from "./Time"
import MyButton from "./myButton";
function App() {
  return (
    <div className="App">
      <h1>Personal diary</h1>
<ListItems/>
<Time/>
<MyButton/>
    </div>
  );
}

export default App;
