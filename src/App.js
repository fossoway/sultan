import './style/style.scss';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useState} from "react";
import items from "./data/catalog.json";


function App() {

    const [goods, setGoods] = useState(items);

  return (
    <div className="App">
      <Header />
      <Main goods={goods}/>
    </div>
  );
}

export default App;
