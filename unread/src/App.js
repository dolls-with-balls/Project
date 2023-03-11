import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./pages/Home";
import { CarouseL } from "./components/Carousel";
import { Header } from "./components/Header";
import { NewsDetail } from "./components/NewsDetail";
import { Signup } from "./components/Signup";
import { CreateNews } from "./components/createNews";
import { DataProvider } from "./contexts/DataProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news">
              <Route path=":id" element={<NewsDetail />} />
            </Route>
            <Route path="/create" element={<CreateNews />} />
            {/* <Route path="/carousel" element={<CarouseL />} /> */}
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
