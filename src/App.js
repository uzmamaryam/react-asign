import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import List from "./components/List";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Link to={`/add`}>Add</Link>
        <Link to={`/list`}>List</Link>
        <Link to={`/`}>Home</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;