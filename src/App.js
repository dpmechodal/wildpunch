import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from './Scrolltotop';
import Home from './Components/Home';
import WildWeDo from './Components/WildWeDo';
import Contact from './Components/Contact';
import WildWeAre from './Components/WildWeAre';
import WildWildWork from './Components/WildWildWork';
import BeWildWithUs from './Components/BeWildWithUs';


function App() {
  return (
    <HelmetProvider>
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/WildWeDo' element={<WildWeDo/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/WildWeAre' element={<WildWeAre/>}/>
          <Route path='/WildWildWork' element={<WildWildWork/>}/>
          <Route path='/BeWildWithUs' element={<BeWildWithUs/>}/>
        </Routes>
      </Router>
    </div>
    </HelmetProvider>
  );
}

export default App;
