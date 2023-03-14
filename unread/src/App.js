import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { NewsDetail } from "./components/NewsDetail";
import { Signup } from "./pages/Signup";
import { CreateNews } from "./components/createNews";
import { DataProvider } from "./contexts/DataProvider";
import { Container } from "./components/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news">
              <Route path=":id" element={<NewsDetail />} />
            </Route>
            <Route path="/create" element={<CreateNews />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
