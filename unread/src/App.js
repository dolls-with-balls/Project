import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { CarouseL } from "./components/Carousel";
import { NewsDetail } from "./components/NewsDetail";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<NewsDetail/>} />
          <Route path="/carousel" element={<CarouseL/>} />
          <Route path="/userprofile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
