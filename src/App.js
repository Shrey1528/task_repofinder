import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repository from "./pages/Repository";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Repository />} />
      </Routes>
    </>
  );
}

export default App;
