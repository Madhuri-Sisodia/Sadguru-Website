import {BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import MainPage from './components/Pages/MainPage';
import Home from './components/Pages/Home';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
