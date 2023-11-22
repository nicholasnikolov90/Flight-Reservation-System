import { Route, Routes } from "react-router-dom";
import "./App.css";
import BrowseFlight from "./views/BrowseFlight";
import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browseflight" element={<BrowseFlight />} />
    </Routes>
  );
}

export default App;
