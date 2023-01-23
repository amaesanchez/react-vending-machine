import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Coffee from "./Coffee";
import Chocolate from "./Chocolate";
import HiChews from "./HiChews";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <VendingMachine />
        <Routes>
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/hichews" element={<HiChews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
