import "./App.css";
import Main from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import Search from "./Components/Search";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Search" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
