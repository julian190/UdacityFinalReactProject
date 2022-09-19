import "./App.css";
import { useState, useEffect } from "react";
import Main from "./Components/Main";
import { getAll } from "./BooksAPI";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [ShowBooks, setShowBooks] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await getAll();
      setShowBooks(res);
    };
    fetchdata();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main books={ShowBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
