import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from './Scrolltotop';
import Home from './Components/Home';
import Contact from './Components/Contact';


function App() {
  return (
    <HelmetProvider>
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
    </HelmetProvider>
  );
}

export default App;
