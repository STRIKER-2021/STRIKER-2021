import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Inventory } from './pages/Inventory';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';


const App = () => (
        <BrowserRouter>
                {/* <Helloworld /> */}
                <Navbar/>
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/inventory' element={<Inventory />} />
                        <Route path='/contact' element={<Contact />} />
                </Routes>
  
        </BrowserRouter>
);

export default App;
