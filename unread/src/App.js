import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
