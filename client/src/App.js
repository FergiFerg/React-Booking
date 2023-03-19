import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Portfolio from './screens/portfolio';
import BookingPage from './screens/bookingpage';
import About from './screens/about';
import Login from './screens/login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>


  );
}


export default App;
