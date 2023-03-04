import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { LadderMews } from "./components/LadderNews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/laddernews" element={<LadderMews/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
