import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { NewsDetail } from "./components/NewsDetail";
import { UserProfile } from "./components/UserProfile";
import { DataProvider } from "./contexts/DataProvider";
import { CreateNews } from "./components/createNews"

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
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
