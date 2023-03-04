import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { CarouseL } from "./components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/carousel" element={<CarouseL/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
