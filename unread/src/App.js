import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { CarouseL } from "./components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carousel" element={<CarouseL />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
