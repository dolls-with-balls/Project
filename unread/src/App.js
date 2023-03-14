import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { NewsDetail } from "./components/NewsDetail";
import { UserProfile } from "./components/UserProfile";
import { CarouseL } from "./components/Carousel";
import { DataProvider } from "./contexts/DataProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<NewsDetail />} />
            <Route path="/carousel" element={<CarouseL />} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
