import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CarouseL } from "./components/Carousel";
import { NewsDetail } from "./components/NewsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<NewsDetail/>} />
          <Route path="/carousel" element={<CarouseL/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
