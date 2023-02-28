import './App.css';
import { Signup } from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Header } from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/signup' element={ <Signup/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
