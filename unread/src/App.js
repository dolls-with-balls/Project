import './App.css';
import { Signup } from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={ <Signup/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
