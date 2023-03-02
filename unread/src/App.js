import "./App.css";
import { Home } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
